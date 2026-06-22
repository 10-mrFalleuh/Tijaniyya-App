import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AccountSecurityPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const handleChangeEmail = async () => {
    if (!email) {
      alert('Entrez un email');
      return;
    }

    try {
      setLoadingEmail(true);

      const { error } =
        await supabase.auth.updateUser({
          email,
        });

      if (error) {
        alert(error.message);
        return;
      }

      alert(
        'Un email de confirmation a été envoyé.'
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleChangePassword = async () => {
    if (password.length < 6) {
      alert(
        'Le mot de passe doit contenir au moins 6 caractères.'
      );
      return;
    }

    try {
      setLoadingPassword(true);

      const { error } =
        await supabase.auth.updateUser({
          password,
        });

      if (error) {
        alert(error.message);
        return;
      }

      alert('Mot de passe modifié avec succès');

      setPassword('');
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingPassword(false);
    }
  };

  const handleResendVerification = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      alert('Aucun email trouvé');
      return;
    }

    const { error } =
      await supabase.auth.resend({
        type: 'signup',
        email: user.email,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      'Email de vérification renvoyé.'
    );
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();

    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">

        <h1 className="text-2xl font-bold mb-6">
          Sécurité du compte
        </h1>

        {/* EMAIL */}

        <div className="mb-8">
          <h2 className="font-semibold mb-2">
            Modifier l'email
          </h2>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Nouvel email"
            className="w-full border rounded-xl px-4 py-3 mb-3"
          />

          <button
            onClick={handleChangeEmail}
            disabled={loadingEmail}
            className="w-full bg-primary-600 text-white py-3 rounded-xl"
          >
            {loadingEmail
              ? 'Modification...'
              : "Modifier l'email"}
          </button>
        </div>

        {/* PASSWORD */}

        <div className="mb-8">
          <h2 className="font-semibold mb-2">
            Modifier le mot de passe
          </h2>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Nouveau mot de passe"
            className="w-full border rounded-xl px-4 py-3 mb-3"
          />

          <button
            onClick={handleChangePassword}
            disabled={loadingPassword}
            className="w-full bg-primary-600 text-white py-3 rounded-xl"
          >
            {loadingPassword
              ? 'Modification...'
              : 'Modifier le mot de passe'}
          </button>
        </div>

        {/* VERIFICATION */}

        <div className="mb-8">
          <button
            onClick={handleResendVerification}
            className="w-full border border-primary-600 text-primary-600 py-3 rounded-xl"
          >
            Renvoyer l'email de vérification
          </button>
        </div>

        {/* LOGOUT */}

        <div className="mb-8">
          <button
            onClick={handleLogout}
            className="w-full bg-orange-500 text-white py-3 rounded-xl"
          >
            Déconnexion
          </button>
        </div>

        {/* DELETE */}

        <div>
          <button
            disabled
            className="w-full bg-red-600 text-white py-3 rounded-xl opacity-50"
          >
            Supprimer mon compte
            (bientôt disponible)
          </button>
        </div>

      </div>
    </div>
  );
}