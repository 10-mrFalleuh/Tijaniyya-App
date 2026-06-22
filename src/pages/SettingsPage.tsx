import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/appStore';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Moon, Sun, Bell, RotateCcw, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SettingsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    theme, toggleTheme, language, setLanguage,
    notifications, autoReset, setNotifications, setAutoReset,
    isAuthenticated, user, logout,
  } = useAppStore();

  const handleLanguageChange = (lang: 'fr' | 'en' | 'ar' | 'ms' | 'es' | 'tr' | 'fa') => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const langOptions = [
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
    { code: 'ar' as const, label: 'العربية', flag: '🇸🇦' },
    { code: 'ms' as const, label: 'Melayu', flag: '🇲🇾' },
    { code: 'es' as const, label: 'Español', flag: '🇪🇸' },
    { code: 'tr' as const, label: 'Türkçe', flag: '🇹🇷' },
    { code: 'fa' as const, label: 'فارسی', flag: '🇮🇷' },
  ];

  return (
    <div className="min-h-screen min-h-[100dvh] bg-cream dark:bg-gray-950 pb-24">
      {/* Header */}
      <div className="glass-header text-white safe-top sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-lg bg-white/15 active:bg-white/25 touch-target">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-semibold text-lg">{t('settings')}</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* User Profile Card */}
        {isAuthenticated && user && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">{user.displayName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Theme */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
            {t('theme')}
          </h3>
          <button onClick={toggleTheme}
            className="w-full flex items-center justify-between py-2 text-gray-800 dark:text-gray-200">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? <Moon className="w-5 h-5 text-primary-500" /> : <Sun className="w-5 h-5 text-gold-400" />}
              <span>{theme === 'dark' ? t('darkMode') : t('lightMode')}</span>
            </div>
            <div className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5
              ${theme === 'dark' ? 'bg-primary-600' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform
                ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </button>
        </motion.div>

        {/* Language */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-4 h-4" /> {t('language')}
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {langOptions.map((l) => (
              <button key={l.code} onClick={() => handleLanguageChange(l.code)}
                className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 justify-center
                  ${language === l.code
                    ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-200 border-2 border-primary-500'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-2 border-transparent'}`}>
                <span>{l.flag}</span>
                <span className="text-xs">{l.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {t('preferences')}
          </h3>
          {/* Notifications */}
          <button onClick={() => setNotifications(!notifications)}
            className="w-full flex items-center justify-between py-2 text-gray-800 dark:text-gray-200">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="text-sm">{t('notificationsLabel')}</span>
            </div>
            <div className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5
              ${notifications ? 'bg-primary-600' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform
                ${notifications ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </button>
          {/* Auto Reset */}
          <button onClick={() => setAutoReset(!autoReset)}
            className="w-full flex items-center justify-between py-2 text-gray-800 dark:text-gray-200">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-gray-400" />
              <span className="text-sm">{t('autoResetLabel')}</span>
            </div>
            <div className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5
              ${autoReset ? 'bg-primary-600' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform
                ${autoReset ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </button>
        </motion.div>

        {/* Logout */}
        {isAuthenticated && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <button onClick={() => { logout(); navigate('/login'); }}
              className="w-full py-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400
                         font-medium text-sm border border-red-200 dark:border-red-800/50
                         active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <LogOut className="w-4 h-4" />
              {t('logoutBtn')}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
