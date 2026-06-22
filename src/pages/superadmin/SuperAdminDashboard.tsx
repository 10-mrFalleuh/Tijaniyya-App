import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';


export default function SuperAdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    users: 0,
    admins: 0,
    superAdmins: 0,
    wirds: 0,
    audios: 0,
    ebooks: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const { count: users } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      const { count: admins } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'admin');

      const { count: superAdmins } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'super_admin');

      const { count: wirds } = await supabase
        .from('wirds')
        .select('*', { count: 'exact', head: true });

      const { count: audios } = await supabase
        .from('audios')
        .select('*', { count: 'exact', head: true });

      const { count: ebooks } = await supabase
        .from('ebooks')
        .select('*', { count: 'exact', head: true });

      setStats({
        users: users || 0,
        admins: admins || 0,
        superAdmins: superAdmins || 0,
        wirds: wirds || 0,
        audios: audios || 0,
        ebooks: ebooks || 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-950">

      <h1 className="text-3xl font-bold mb-6">
        👑 Dashboard Super Admin
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow">
          <h3>Utilisateurs</h3>
          <p className="text-3xl font-bold">
            {stats.users}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow">
          <h3>Admins</h3>
          <p className="text-3xl font-bold">
            {stats.admins}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow">
          <h3>Super Admins</h3>
          <p className="text-3xl font-bold">
            {stats.superAdmins}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow">
          <h3>Wirds</h3>
          <p className="text-3xl font-bold">
            {stats.wirds}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow">
          <h3>Audios</h3>
          <p className="text-3xl font-bold">
            {stats.audios}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow">
          <h3>E-books</h3>
          <p className="text-3xl font-bold">
            {stats.ebooks}
          </p>
        </div>

      </div>

      <div className="mt-6">
        <button
          onClick={() => navigate('/superadmin/users')}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow hover:bg-primary-700"
        >
          Gérer les utilisateurs
        </button>
      </div>
    </div>

  );
}