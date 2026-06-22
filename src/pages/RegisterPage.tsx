import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  Globe,
  Calendar,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const countries = [
  'Sénégal',
  'Mali',
  'Guinée',
  "Côte d'Ivoire",
  'Burkina Faso',
  'Niger',
  'Gambie',
  'Mauritanie',
  'Cameroun',
  'Gabon',
  'Tchad',
  'Maroc',
  'Algérie',
  'Tunisie',
  'France',
  'Belgique',
  'Canada',
  'États-Unis',
  'Allemagne',
  'Italie',
  'Espagne',
  'Royaume-Uni',
  'Turquie',
  'Malaisie',
  'Indonésie',
  'Arabie Saoudite',
  'Émirats Arabes Unis',
  'Autre',
];

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPwd: '',
    displayName: '',
    age: '',
    gender: '',
    phone: '',
    country: '',
  });

  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const update = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError('');
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setSuccess('');

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

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.displayName,
            age: form.age,
            gender: form.gender,
            phone: form.phone,
            country: form.country,
          },
        },
      });

      console.log(
  'SIGNUP DATA:',
  JSON.stringify(data, null, 2)
);

console.log(
  'SIGNUP ERROR:',
  JSON.stringify(error, null, 2)
);

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(
        'Compte créé avec succès. Vérifiez votre adresse email pour confirmer votre compte.'
      );

      // Redirection après succès
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Une erreur s'est produite.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      setError('');

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      console.error(err);
      setError('Erreur lors de la connexion Google.');
    }
  };

  const inputCls = `
    w-full pl-10 pr-4 py-3 rounded-xl
    bg-gray-50 dark:bg-gray-800
    border border-gray-200 dark:border-gray-700
    text-gray-800 dark:text-gray-200 text-sm
    focus:outline-none focus:ring-2 focus:ring-primary-500/50
    focus:border-primary-500
    placeholder:text-gray-400 dark:placeholder:text-gray-500
  `;

  return (
    <div className="min-h-screen min-h-[100dvh] bg-cream dark:bg-gray-950 bg-islamic-pattern flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8"
      >
        <div className="text-center mb-5">
          <h1 className="font-arabic text-2xl text-primary-800 dark:text-primary-300 mb-1">
            بِسۡمِ ٱللَّهِ
          </h1>

          <h2 className="font-display text-xl font-semibold text-gray-800 dark:text-gray-200">
            {t('registerTitle')}
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {t('registerSubtitle')}
          </p>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleRegister}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl
          bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700
          hover:bg-gray-50 transition-all text-gray-700 dark:text-gray-200 font-medium text-sm"
        >
          {t('registerWithGoogle')}
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-xs text-gray-400">{t('or')}</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        <form onSubmit={handleRegister} className="space-y-3">
          {/* Nom */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={form.displayName}
              onChange={(e) => update('displayName', e.target.value)}
              placeholder="Nom complet"
              className={inputCls}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="Adresse email"
              className={inputCls}
            />
          </div>

          {/* Mot de passe */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

            <input
              type={showPwd ? 'text' : 'password'}
              value={form.password}
              onChange={(e) => update('password', e.target.value)}
              placeholder="Mot de passe"
              className={`${inputCls} pr-12`}
            />

            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPwd ? (
                <EyeOff className="w-4 h-4 text-gray-400" />
              ) : (
                <Eye className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>

          {/* Confirmation */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="password"
              value={form.confirmPwd}
              onChange={(e) => update('confirmPwd', e.target.value)}
              placeholder="Confirmer le mot de passe"
              className={inputCls}
            />
          </div>

          {/* Age + Genre */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="number"
                value={form.age}
                onChange={(e) => update('age', e.target.value)}
                placeholder="Âge"
                className={inputCls}
              />
            </div>

            <select
              value={form.gender}
              onChange={(e) => update('gender', e.target.value)}
              className="w-full py-3 px-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <option value="">Genre</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
          </div>

          {/* Téléphone */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="Téléphone"
              className={inputCls}
            />
          </div>

          {/* Pays */}
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={form.country}
              onChange={(e) => update('country', e.target.value)}
              className="w-full pl-10 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <option value="">Pays</option>

              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                >
                  {country}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p className="text-red-500 text-xs text-center">{error}</p>
          )}

          {success && (
            <p className="text-green-600 text-xs text-center">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm"
          >
            {loading
              ? 'Création du compte...'
              : "S'inscrire"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Déjà un compte ?{' '}
          <Link
            to="/login"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </motion.div>
    </div>
  );
}