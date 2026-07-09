import React from 'react';

export default function Privacy() {
  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.6' }}>
      <h1 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Politique de Confidentialité</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>En vigueur à partir du 9 juillet 2026</p>
      
      <p>
        Cette politique de confidentialité décrit de quelle manière notre application gère vos informations personnelles 
        lorsque vous utilisez le service d'authentification Google.
      </p>

      <h2 style={{ marginTop: '30px' }}>1. Collecte des données</h2>
      <p>
        Lorsque vous utilisez la connexion sécurisée via Google OAuth, notre application accède uniquement aux informations de base de votre profil fournies par Google : votre adresse e-mail, votre nom complet et votre photo de profil.
      </p>

      <h2 style={{ marginTop: '30px' }}>2. Utilisation des données</h2>
      <p>
        Ces données sont stockées de manière sécurisée dans notre base de données Supabase et sont exclusivement utilisées pour identifier votre compte utilisateur, mémoriser vos préférences et sécuriser vos accès à l'application. Nous ne vendons, n'échangeons et ne transférons aucune donnée à des tiers.
      </p>

      <h2 style={{ marginTop: '30px' }}>3. Vos Droits et Suppression</h2>
      <p>
        Vous pouvez à tout moment révoquer l'accès de l'application à votre compte Google via les paramètres de sécurité de votre compte Google, ou demander la suppression complète de vos données utilisateur en contactant l'assistance technique.
      </p>
    </div>
  );
}