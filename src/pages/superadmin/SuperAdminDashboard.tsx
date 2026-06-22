import { useEffect, useState } from "react";
import { client, getSuperAdminUsers, getSuperAdminStats } from "../../api/client";
import { useNavigate } from "react-router-dom";
import { Users, Globe, UserCheck, Clock, LogOut, TrendingUp } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: number;
  lastLoginAt: number | null;
  banned: number;
  profile: {
    country: string | null;
    gender: string | null;
    age: number | null;
    phone: string | null;
  } | null;
}

interface Stats {
  totalUsers: number;
  usersByCountry: { country: string; count: number }[];
  usersByGender: { gender: string; count: number }[];
  ageGroups: {
    under_18: number;
    "18_25": number;
    "26_35": number;
    "36_50": number;
    over_50: number;
  };
  recentRegistrations: number;
}

export default function SuperAdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "users">("overview");

  useEffect(() => {
    // Check auth
    client.auth.getSession().then((session) => {
      if (!session.data?.user) {
        navigate("/superadmin/login");
      }
    });

    // Fetch data
    Promise.all([
      getSuperAdminUsers(),
      getSuperAdminStats()
    ])
      .then(([usersData, statsData]) => {
        if (usersData.users) setUsers(usersData.users);
        if (statsData.stats) setStats(statsData.stats);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Erreur lors du chargement des données");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = async () => {
    await client.auth.signOut();
    navigate("/superadmin/login");
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-700">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SuperAdmin Dashboard</h1>
            <p className="text-sm text-gray-500">Gestion des utilisateurs et statistiques</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "overview"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Aperçu
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "users"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Liste des utilisateurs ({users.length})
          </button>
        </div>

        {activeTab === "overview" && stats && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={<Users className="text-blue-500" />}
                title="Total utilisateurs"
                value={stats.totalUsers.toString()}
                subtitle="inscrits"
              />
              <StatCard
                icon={<Clock className="text-emerald-500" />}
                title="7 derniers jours"
                value={stats.recentRegistrations.toString()}
                subtitle="nouvelles inscriptions"
              />
              <StatCard
                icon={<Globe className="text-purple-500" />}
                title="Pays"
                value={stats.usersByCountry.length.toString()}
                subtitle="pays différents"
              />
              <StatCard
                icon={<UserCheck className="text-orange-500" />}
                title="Âge moyen"
                value={calculateAverageAge(stats.ageGroups).toString()}
                subtitle="ans"
              />
            </div>

            {/* Countries */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Globe size={20} />
                Utilisateurs par pays
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {stats.usersByCountry.map((item) => (
                  <div
                    key={item.country}
                    className="bg-gray-50 rounded-lg p-3 flex justify-between items-center"
                  >
                    <span className="text-gray-700 font-medium">{item.country}</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-sm font-semibold">
                      {item.count}
                    </span>
                  </div>
                ))}
                {stats.usersByCountry.length === 0 && (
                  <p className="text-gray-500 col-span-4 text-center py-4">
                    Aucune donnée de pays disponible
                  </p>
                )}
              </div>
            </div>

            {/* Gender */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <UserCheck size={20} />
                Utilisateurs par genre
              </h2>
              <div className="flex gap-4">
                {stats.usersByGender.map((item) => (
                  <div
                    key={item.gender}
                    className="flex-1 bg-gray-50 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-gray-900">{item.count}</div>
                    <div className="text-sm text-gray-500 capitalize">{item.gender}</div>
                  </div>
                ))}
                {stats.usersByGender.length === 0 && (
                  <p className="text-gray-500 text-center py-4 w-full">
                    Aucune donnée de genre disponible
                  </p>
                )}
              </div>
            </div>

            {/* Age Groups */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Groupes d'âge
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {Object.entries(stats.ageGroups).map(([group, count]) => (
                  <div key={group} className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-gray-900">{count}</div>
                    <div className="text-xs text-gray-500">
                      {formatAgeGroup(group)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pays
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Genre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Inscrit le
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dernière connexion
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-emerald-700 font-semibold">
                              {user.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                            {user.banned === 1 && (
                              <span className="text-xs text-red-600">Bloqué</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.profile?.country || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                        {user.profile?.gender || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(user.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.lastLoginAt ? formatDate(user.lastLoginAt) : "-"}
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        Aucun utilisateur trouvé
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }: { icon: React.ReactNode; title: string; value: string; subtitle: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-xs text-gray-400">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function formatAgeGroup(group: string): string {
  const groups: Record<string, string> = {
    under_18: "Moins de 18",
    "18_25": "18-25 ans",
    "26_35": "26-35 ans",
    "36_50": "36-50 ans",
    over_50: "Plus de 50",
  };
  return groups[group] || group;
}

function calculateAverageAge(ageGroups: Stats["ageGroups"]): number {
  const total =
    ageGroups.under_18 +
    ageGroups["18_25"] +
    ageGroups["26_35"] +
    ageGroups["36_50"] +
    ageGroups.over_50;
  
  if (total === 0) return 0;
  
  const weightedSum =
    ageGroups.under_18 * 15 +
    ageGroups["18_25"] * 21.5 +
    ageGroups["26_35"] * 30.5 +
    ageGroups["36_50"] * 43 +
    ageGroups.over_50 * 55;
  
  return Math.round(weightedSum / total);
}
