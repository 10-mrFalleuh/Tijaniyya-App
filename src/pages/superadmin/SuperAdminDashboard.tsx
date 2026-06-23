import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  ArrowLeft,
  Users,
  Shield,
  Crown,
  BookOpen,
  Headphones,
  Library,
  Settings,
  ChevronRight,
} from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* HEADER */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>

          <h1 className="font-bold text-lg">
            Administration
          </h1>

          <div />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            relative overflow-hidden
            rounded-3xl
            p-8
            mb-6
            bg-gradient-to-br
            from-primary-700
            via-primary-800
            to-primary-900
            text-white
            shadow-2xl
          "
        >
          <div className="absolute inset-0 opacity-10 bg-islamic-pattern" />

          <div className="relative z-10 text-center">

            <Crown className="mx-auto w-14 h-14 mb-4" />

            <h1 className="text-3xl font-bold">
              Dashboard Super Admin
            </h1>

            <p className="mt-2 opacity-90">
              Gestion complète de la plateforme Tijaniyya
            </p>

          </div>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 shadow">
            <Users className="w-8 h-8 text-blue-600 mb-3" />
            <p className="text-gray-500 text-sm">
              Utilisateurs
            </p>
            <h2 className="text-3xl font-bold">
              {stats.users}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 shadow">
            <Shield className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-gray-500 text-sm">
              Admins
            </p>
            <h2 className="text-3xl font-bold">
              {stats.admins}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 shadow">
            <Crown className="w-8 h-8 text-amber-600 mb-3" />
            <p className="text-gray-500 text-sm">
              Super Admins
            </p>
            <h2 className="text-3xl font-bold">
              {stats.superAdmins}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 shadow">
            <BookOpen className="w-8 h-8 text-primary-600 mb-3" />
            <p className="text-gray-500 text-sm">
              Wirds
            </p>
            <h2 className="text-3xl font-bold">
              {stats.wirds}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 shadow">
            <Headphones className="w-8 h-8 text-purple-600 mb-3" />
            <p className="text-gray-500 text-sm">
              Audios
            </p>
            <h2 className="text-3xl font-bold">
              {stats.audios}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 shadow">
            <Library className="w-8 h-8 text-orange-600 mb-3" />
            <p className="text-gray-500 text-sm">
              E-books
            </p>
            <h2 className="text-3xl font-bold">
              {stats.ebooks}
            </h2>
          </div>

        </div>

        {/* MODULES */}
        <div className="mt-8">

          <h2 className="text-xl font-bold mb-4">
            Modules d'administration
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <button
              onClick={() => navigate('/superadmin/users')}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-primary-600" />
                <div className="text-left">
                  <p className="font-semibold">
                    Utilisateurs
                  </p>
                  <p className="text-sm text-gray-500">
                    Gestion des comptes
                  </p>
                </div>
              </div>

              <ChevronRight />
            </button>

            <button
              onClick={() => navigate('/superadmin/wirds')}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <p className="font-semibold">
                    Wirds
                  </p>
                  <p className="text-sm text-gray-500">
                    Gestion des wirds
                  </p>
                </div>
              </div>

              <ChevronRight />
            </button>

            <button
              onClick={() => navigate('/superadmin/audios')}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Headphones className="w-8 h-8 text-purple-600" />
                <div className="text-left">
                  <p className="font-semibold">
                    Audios
                  </p>
                  <p className="text-sm text-gray-500">
                    Gestion des audios
                  </p>
                </div>
              </div>

              <ChevronRight />
            </button>

            <button
              onClick={() => navigate('/superadmin/ebooks')}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Library className="w-8 h-8 text-orange-600" />
                <div className="text-left">
                  <p className="font-semibold">
                    E-books
                  </p>
                  <p className="text-sm text-gray-500">
                    Gestion des e-books
                  </p>
                </div>
              </div>

              <ChevronRight />
            </button>

          </div>
        </div>

        {/* PARAMÈTRES */}
        <div className="mt-8">
          <button
            className="w-full bg-primary-600 hover:bg-primary-700 text-white rounded-2xl p-4 flex items-center justify-center gap-3"
          >
            <Settings className="w-5 h-5" />
            Paramètres de la plateforme
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Tijaniyya App • Administration
          </p>
        </div>

      </div>
    </div>
  );
}