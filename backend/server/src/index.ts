/**
 * EDGESPARK SERVER
 *
 * Create and return your Hono app.
 * See @sdk/server-types for SDK API.
 *
 * ═══════════════════════════════════════════════════════════════════
 * ✅ WHAT YOU CAN DO
 * ═══════════════════════════════════════════════════════════════════
 *
 * - Create a Hono app and define routes
 * - Use edgespark.db for database operations (Drizzle ORM)
 * - Use edgespark.storage for file operations
 * - Use edgespark.auth.user for authenticated user info
 * - Access request data: c.req.json(), c.req.param(), c.req.query()
 * - Return responses: c.json(), c.text(), c.html()
 *
 * ═══════════════════════════════════════════════════════════════════
 * ❌ WHAT YOU CANNOT DO
 * ═══════════════════════════════════════════════════════════════════
 *
 * - DON'T forget to return the app
 * - DON'T remove required imports
 *
 * ═══════════════════════════════════════════════════════════════════
 * 📚 API DOCUMENTATION
 * ═══════════════════════════════════════════════════════════════════
 *
 * See @sdk/server-types for complete API documentation with examples.
 */

import { Hono } from "hono";
import type { Client } from "@sdk/server-types";
import { tables, buckets } from "@generated";
import { eq, desc, sql, count } from "drizzle-orm";

/**
 * Create your Hono app
 * @param edgespark - EdgeSpark SDK client
 * @returns Hono app with your routes defined
 */
export async function createApp(
  edgespark: Client<typeof tables>
): Promise<Hono> {
  const app = new Hono();

  // ═══════════════════════════════════════════════════════════════════
  // PATH CONVENTIONS (Authentication)
  //
  // /api/*          → Login required (edgespark.auth.user guaranteed)
  // /api/public/*   → Login optional (edgespark.auth.user if logged in)
  // /api/webhooks/* → No auth check (handle verification yourself)
  // ═══════════════════════════════════════════════════════════════════

  // Test endpoint - remove when you add your own routes
  app.get("/api/public/hello", (c) => c.json({ message: "Hello from EdgeSpark! Spark your idea to the Edge." }));

  // ═══════════════════════════════════════════════════════════════════
  // USER PROFILE ROUTES
  // ═══════════════════════════════════════════════════════════════════
  
  // Create or update user profile
  app.post("/api/profile", async (c) => {
    const user = edgespark.auth.user!;
    const data = await c.req.json();
    
    console.log("[API] POST /api/profile - updating profile for user:", user.id);
    
    const existing = await edgespark.db
      .select()
      .from(tables.userProfiles)
      .where(eq(tables.userProfiles.userId, user.id));
    
    if (existing.length > 0) {
      // Update existing profile
      const updated = await edgespark.db
        .update(tables.userProfiles)
        .set({
          age: data.age,
          gender: data.gender,
          phone: data.phone,
          country: data.country,
          updatedAt: Math.floor(Date.now()),
        })
        .where(eq(tables.userProfiles.userId, user.id))
        .returning();
      
      console.log("[API] POST /api/profile - profile updated successfully");
      return c.json({ profile: updated[0] });
    } else {
      // Create new profile
      const created = await edgespark.db
        .insert(tables.userProfiles)
        .values({
          userId: user.id,
          age: data.age,
          gender: data.gender,
          phone: data.phone,
          country: data.country,
        })
        .returning();
      
      console.log("[API] POST /api/profile - profile created successfully");
      return c.json({ profile: created[0] }, 201);
    }
  });

  // Get current user profile
  app.get("/api/profile", async (c) => {
    const user = edgespark.auth.user!;
    
    console.log("[API] GET /api/profile - fetching profile for user:", user.id);
    
    const profile = await edgespark.db
      .select()
      .from(tables.userProfiles)
      .where(eq(tables.userProfiles.userId, user.id));
    
    if (profile.length === 0) {
      return c.json({ profile: null });
    }
    
    return c.json({ profile: profile[0] });
  });

  // ═══════════════════════════════════════════════════════════════════
  // SUPERADMIN ROUTES
  // ═══════════════════════════════════════════════════════════════════
  
  // Get all users with profiles (superadmin only)
  // In production, you would add proper admin role checking
  app.get("/api/superadmin/users", async (c) => {
    const user = edgespark.auth.user!;
    
    console.log("[API] GET /api/superadmin/users - admin request from:", user.email);
    
    // Get all auth users
    const authUsers = await edgespark.db
      .select()
      .from(tables.esSystemAuthUser)
      .orderBy(desc(tables.esSystemAuthUser.createdAt));
    
    // Get all profiles
    const profiles = await edgespark.db
      .select()
      .from(tables.userProfiles);
    
    // Merge user data with profiles
    const users = authUsers.map(authUser => {
      const profile = profiles.find(p => p.userId === authUser.id);
      return {
        id: authUser.id,
        name: authUser.name,
        email: authUser.email,
        createdAt: authUser.createdAt,
        lastLoginAt: authUser.lastLoginAt,
        banned: authUser.banned,
        profile: profile || null,
      };
    });
    
    console.log("[API] GET /api/superadmin/users - returning", users.length, "users");
    return c.json({ users });
  });

  // Get statistics (superadmin)
  app.get("/api/superadmin/stats", async (c) => {
    const user = edgespark.auth.user!;
    
    console.log("[API] GET /api/superadmin/stats - admin request from:", user.email);
    
    // Total users
    const totalUsersResult = await edgespark.db
      .select({ count: count() })
      .from(tables.esSystemAuthUser);
    
    const totalUsers = totalUsersResult[0]?.count || 0;
    
    // Users by country
    const usersByCountry = await edgespark.db
      .select({
        country: tables.userProfiles.country,
        count: count(),
      })
      .from(tables.userProfiles)
      .where(sql`${tables.userProfiles.country} IS NOT NULL AND ${tables.userProfiles.country} != ''`)
      .groupBy(tables.userProfiles.country);
    
    // Users by gender
    const usersByGender = await edgespark.db
      .select({
        gender: tables.userProfiles.gender,
        count: count(),
      })
      .from(tables.userProfiles)
      .where(sql`${tables.userProfiles.gender} IS NOT NULL AND ${tables.userProfiles.gender} != ''`)
      .groupBy(tables.userProfiles.gender);
    
    // Users by age group
    const ageGroups = await edgespark.db
      .select({
        age: tables.userProfiles.age,
      })
      .from(tables.userProfiles)
      .where(sql`${tables.userProfiles.age} IS NOT NULL`);
    
    // Calculate age groups
    const ageGroupCounts = {
      "under_18": 0,
      "18_25": 0,
      "26_35": 0,
      "36_50": 0,
      "over_50": 0,
    };
    
    ageGroups.forEach(u => {
      if (u.age !== null) {
        if (u.age < 18) ageGroupCounts.under_18++;
        else if (u.age <= 25) ageGroupCounts["18_25"]++;
        else if (u.age <= 35) ageGroupCounts["26_35"]++;
        else if (u.age <= 50) ageGroupCounts["36_50"]++;
        else ageGroupCounts.over_50++;
      }
    });
    
    // Recent registrations (last 7 days)
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const recentUsers = await edgespark.db
      .select({ count: count() })
      .from(tables.esSystemAuthUser)
      .where(sql`${tables.esSystemAuthUser.createdAt} >= ${sevenDaysAgo}`);
    
    const stats = {
      totalUsers,
      usersByCountry,
      usersByGender,
      ageGroups: ageGroupCounts,
      recentRegistrations: recentUsers[0]?.count || 0,
    };
    
    console.log("[API] GET /api/superadmin/stats - returning stats");
    return c.json({ stats });
  });

  // ═══════════════════════════════════════════════════════════════════
  // PROJETS ROUTES (CRUD)
  // ═══════════════════════════════════════════════════════════════════

  // Get all projects for the current user
  app.get("/api/projets", async (c) => {
    const user = edgespark.auth.user!;
    
    console.log("[API] GET /api/projets - fetching projects for user:", user.id);
    
    const projets = await edgespark.db
      .select()
      .from(tables.projets)
      .where(eq(tables.projets.userId, user.id))
      .orderBy(desc(tables.projets.createdAt));
    
    console.log("[API] GET /api/projets - returning", projets.length, "projects");
    return c.json({ data: projets });
  });

  // Get a single project by ID
  app.get("/api/projets/:id", async (c) => {
    const user = edgespark.auth.user!;
    const id = Number(c.req.param("id"));
    
    console.log("[API] GET /api/projets/:id - fetching project:", id);
    
    const projet = await edgespark.db
      .select()
      .from(tables.projets)
      .where(eq(tables.projets.id, id));
    
    if (projet.length === 0 || projet[0].userId !== user.id) {
      return c.json({ error: "Projet non trouvé" }, 404);
    }
    
    return c.json({ data: projet[0] });
  });

  // Create a new project
  app.post("/api/projets", async (c) => {
    const user = edgespark.auth.user!;
    const data = await c.req.json();
    
    console.log("[API] POST /api/projets - creating project for user:", user.id);
    
    if (!data.titre) {
      return c.json({ error: "Le titre est obligatoire" }, 400);
    }
    
    const created = await edgespark.db
      .insert(tables.projets)
      .values({
        userId: user.id,
        titre: data.titre,
        description: data.description || null,
        statut: data.statut || "en_cours",
      })
      .returning();
    
    console.log("[API] POST /api/projets - project created:", created[0].id);
    return c.json({ data: created[0] }, 201);
  });

  // Update a project
  app.put("/api/projets/:id", async (c) => {
    const user = edgespark.auth.user!;
    const id = Number(c.req.param("id"));
    const data = await c.req.json();
    
    console.log("[API] PUT /api/projets/:id - updating project:", id);
    
    // Check ownership
    const existing = await edgespark.db
      .select()
      .from(tables.projets)
      .where(eq(tables.projets.id, id));
    
    if (existing.length === 0 || existing[0].userId !== user.id) {
      return c.json({ error: "Projet non trouvé" }, 404);
    }
    
    const updated = await edgespark.db
      .update(tables.projets)
      .set({
        titre: data.titre ?? existing[0].titre,
        description: data.description ?? existing[0].description,
        statut: data.statut ?? existing[0].statut,
        updatedAt: Math.floor(Date.now()),
      })
      .where(eq(tables.projets.id, id))
      .returning();
    
    console.log("[API] PUT /api/projets/:id - project updated:", id);
    return c.json({ data: updated[0] });
  });

  // Delete a project
  app.delete("/api/projets/:id", async (c) => {
    const user = edgespark.auth.user!;
    const id = Number(c.req.param("id"));
    
    console.log("[API] DELETE /api/projets/:id - deleting project:", id);
    
    // Check ownership
    const existing = await edgespark.db
      .select()
      .from(tables.projets)
      .where(eq(tables.projets.id, id));
    
    if (existing.length === 0 || existing[0].userId !== user.id) {
      return c.json({ error: "Projet non trouvé" }, 404);
    }
    
    await edgespark.db
      .delete(tables.projets)
      .where(eq(tables.projets.id, id));
    
    console.log("[API] DELETE /api/projets/:id - project deleted:", id);
    return c.json({ success: true });
  });

  // Get project stats for dashboard
  app.get("/api/projets/stats/summary", async (c) => {
    const user = edgespark.auth.user!;
    
    console.log("[API] GET /api/projets/stats/summary - fetching stats for user:", user.id);
    
    const allProjets = await edgespark.db
      .select()
      .from(tables.projets)
      .where(eq(tables.projets.userId, user.id));
    
    const stats = {
      total: allProjets.length,
      en_cours: allProjets.filter(p => p.statut === "en_cours").length,
      termine: allProjets.filter(p => p.statut === "termine").length,
      en_attente: allProjets.filter(p => p.statut === "en_attente").length,
    };
    
    return c.json({ data: stats });
  });

  return app;
}
