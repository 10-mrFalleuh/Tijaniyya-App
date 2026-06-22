import { createEdgeSpark } from "@edgespark/client";
import "@edgespark/client/styles.css";

// Backend URL - will be replaced with production URL on publish
export const BACKEND_URL = "https://staging--x51zm7ccphg8z56nn2kr.youbase.cloud";

// Create the EdgeSpark client
export const client = createEdgeSpark({ baseUrl: BACKEND_URL });

// API helpers
export async function getUserProfile() {
  const res = await client.api.fetch("/api/profile");
  return res.json();
}

export async function updateUserProfile(data: {
  age?: number;
  gender?: string;
  phone?: string;
  country?: string;
}) {
  const res = await client.api.fetch("/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Superadmin API
export async function getSuperAdminUsers() {
  const res = await client.api.fetch("/api/superadmin/users");
  return res.json();
}

export async function getSuperAdminStats() {
  const res = await client.api.fetch("/api/superadmin/stats");
  return res.json();
}
