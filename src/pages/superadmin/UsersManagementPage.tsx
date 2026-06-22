import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

type Profile = {
  id: string;
  email: string;
  full_name: string;
  country: string;
  role: string;
  created_at: string;
};

export default function UsersManagementPage() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setUsers(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateRole = async (
    userId: string,
    role: string
  ) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role })
      .eq('id', userId);

    if (error) {
      console.error(error);
      alert('Erreur lors de la mise à jour');
      return;
    }

    loadUsers();
  };

  const deleteUser = async (
    userId: string
  ) => {
    const confirmed = window.confirm(
      'Voulez-vous vraiment supprimer cet utilisateur ?'
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId);

    if (error) {
      console.error(error);
      alert('Erreur de suppression');
      return;
    }

    alert('Utilisateur supprimé');
    loadUsers();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.full_name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">

      <h1 className="text-3xl font-bold mb-6">
        👥 Gestion des utilisateurs
      </h1>

      <input
        type="text"
        placeholder="Rechercher un utilisateur..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full mb-6 border rounded-xl px-4 py-3"
      />

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow overflow-hidden">

        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="text-left p-4">
                Nom
              </th>

              <th className="text-left p-4">
                Email
              </th>

              <th className="text-left p-4">
                Pays
              </th>

              <th className="text-left p-4">
                Rôle
              </th>

              <th className="text-left p-4">
                Date
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t"
              >
                <td className="p-4">
                  {user.full_name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.country}
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-3">

                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        user.role ===
                        'super_admin'
                          ? 'bg-red-100 text-red-700'
                          : user.role ===
                              'admin'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {user.role}
                    </span>

                    <select
                      value={user.role}
                      onChange={(e) =>
                        updateRole(
                          user.id,
                          e.target.value
                        )
                      }
                      className="border rounded-lg px-2 py-1"
                    >
                      <option value="user">
                        Utilisateur
                      </option>

                      <option value="admin">
                        Admin
                      </option>

                      <option value="super_admin">
                        Super Admin
                      </option>
                    </select>

                  </div>
                </td>

                <td className="p-4">
                  {new Date(
                    user.created_at
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      deleteUser(user.id)
                    }
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}