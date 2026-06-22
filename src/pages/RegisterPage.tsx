import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/appStore';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, Phone, Globe, Calendar } from 'lucide-react';

const countries = [
  'Sénégal', 'Mali', 'Guinée', 'Côte d\'Ivoire', 'Burkina Faso', 'Niger', 'Gambie',
  'Mauritanie', 'Cameroun', 'Gabon', 'Tchad', 'Maroc', 'Algérie', 'Tunisie',
  'France', 'Belgique', 'Canada', 'États-Unis', 'Allemagne', 'Italie', 'Espagne',
  'Royaume-Uni', 'Turquie', 'Malaisie', 'Indonésie', 'Arabie Saoudite', 'Émirats Arabes Unis',
  'Autre',
];

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAppStore();
  const [form, setForm] = useState({
    email: '', password: '', confirmPwd: '', displayName: '',
    age: '', gender: '', phone: '', country: '',
  });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.displayName) {
      setError(t('fillAllFields'));
      return;
    }
    if (form.password !== form.confirmPwd) {
      setError(t('passwordMismatch'));
      return;
    }
    if (form.password.length < 6) {
      setError(t('passwordTooShort'));
      return;
    }
    login({
      email: form.email,
      displayName: form.displayName,
      age: form.age,
      gender: form.gender,
      phone: form.phone,
      country: form.country,
      provider: 'email',
    });
    navigate('/');
  };

  const handleGoogleRegister = () => {
    login({
      email: 'user@gmail.com',
      displayName: 'Google User',
      age: '', gender: '', phone: '', country: '',
      provider: 'google',
    });
    navigate('/');
  };

  const inputCls = `w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800
    border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm
    focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
    placeholder:text-gray-400 dark:placeholder:text-gray-500`;

  return (
    <div className="min-h-screen min-h-[100dvh] bg-cream dark:bg-gray-950 bg-islamic-pattern flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8"
      >
        <div className="text-center mb-5">
          <h1 className="font-arabic text-2xl text-primary-800 dark:text-primary-300 mb-1">بِسۡمِ ٱللَّهِ</h1>
          <h2 className="font-display text-xl font-semibold text-gray-800 dark:text-gray-200">{t('registerTitle')}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('registerSubtitle')}</p>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl
                     bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700
                     hover:bg-gray-50 dark:hover:bg-gray-750 active:scale-[0.98]
                     transition-all text-gray-700 dark:text-gray-200 font-medium text-sm touch-target"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {t('registerWithGoogle')}
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-xs text-gray-400">{t('or')}</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-3">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" value={form.displayName} onChange={(e) => update('displayName', e.target.value)}
              placeholder={t('namePlaceholder')} className={inputCls} />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
              placeholder={t('emailPlaceholder')} className={inputCls} />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type={showPwd ? 'text' : 'password'} value={form.password}
              onChange={(e) => update('password', e.target.value)}
              placeholder={t('passwordPlaceholder')} className={`${inputCls} pr-12`} />
            <button type="button" onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="password" value={form.confirmPwd}
              onChange={(e) => update('confirmPwd', e.target.value)}
              placeholder={t('confirmPasswordPlaceholder')} className={inputCls} />
          </div>

          {/* Age + Gender row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="number" value={form.age} onChange={(e) => update('age', e.target.value)}
                placeholder={t('agePlaceholder')} min="10" max="120"
                className={inputCls} />
            </div>
            <select value={form.gender} onChange={(e) => update('gender', e.target.value)}
              className="w-full py-3 px-3 rounded-xl bg-gray-50 dark:bg-gray-800
                border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary-500/50">
              <option value="">{t('genderPlaceholder')}</option>
              <option value="male">{t('male')}</option>
              <option value="female">{t('female')}</option>
            </select>
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)}
              placeholder={t('phonePlaceholder')} className={inputCls} />
          </div>

          {/* Country */}
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select value={form.country} onChange={(e) => update('country', e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800
                border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary-500/50">
              <option value="">{t('countryPlaceholder')}</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <button type="submit"
            className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700
                       text-white font-semibold text-sm transition-colors active:scale-[0.98] touch-target">
            {t('register')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          {t('haveAccount')}{' '}
          <Link to="/login" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
            {t('login')}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
