# Wird Tidiane - Application Tariqa Tijaniyya

## Description du projet
Application mobile-first dédiée à la pratique spirituelle soufie de la Tariqa Tijaniyya. Interface minimaliste et sobre pour la concentration spirituelle, avec support multilingue (Arabe RTL, Français, Anglais).

## Architecture

### Stack technique
- **Frontend**: React 18 + TypeScript + Vite 7
- **Styling**: Tailwind CSS 3.4 avec thème spirituel personnalisé
- **State**: Zustand (persisté en localStorage)
- **Routing**: React Router DOM v6
- **i18n**: react-i18next (FR/EN/AR)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Structure des fichiers
```
src/
├── components/
│   ├── Header.tsx         # En-tête avec greeting, langue, thème
│   ├── Sibha.tsx          # Compteur interactif avec retour haptique
│   ├── WirdCard.tsx       # Carte pour le dashboard
│   └── BottomNav.tsx      # Navigation bottom bar (5 onglets)
├── data/
│   └── litanies.ts        # Données des litanies (4 wirds)
├── hooks/
│   └── useHaptic.ts       # Hook de vibration haptique
├── i18n/
│   └── index.ts           # Configuration i18n (FR/EN/AR/MS/ES/TR)
├── pages/
│   ├── Dashboard.tsx      # Page d'accueil avec 4 cartes wird
│   ├── WirdReader.tsx     # Lecteur de wird + Sibha
│   ├── LoginPage.tsx      # Connexion (email/password + Google)
│   ├── RegisterPage.tsx   # Inscription (email, mdp, âge, genre, tel, pays)
│   ├── SettingsPage.tsx   # Configuration (thème, langue, préférences)
│   ├── MediaLibraryPage.tsx # Médiathèque (liens web + YouTube)
│   ├── AudioPage.tsx      # Audio (placeholder - bientôt disponible)
│   └── AboutPage.tsx      # À propos (CCS, Cheikh Ahmed Karim CISSE)
├── store/
│   └── appStore.ts        # Store Zustand (auth, langue, thème, compteurs, médias)
├── App.tsx                # Routing principal avec protection auth
├── main.tsx               # Point d'entrée
└── index.css              # Styles globaux + composants Tailwind
```

### Authentification
- **Login**: Email/password + Google (bouton OAuth)
- **Register**: Nom, email, mot de passe, âge, genre, téléphone, pays
- **Routes protégées**: Toutes les pages principales nécessitent une connexion
- **État**: Persisté dans localStorage via Zustand

### Navigation
- **Bottom Nav**: 5 onglets (Accueil, Audio, Médiathèque, Paramètres, À propos)

### Les 4 Wirds (Sections)
1. **Wird Lazim** (tasbih_id=2) - Matin et Soir, compteurs 100/100/100
2. **Wazifa** (tasbih_id=3) - Quotidienne, inclut Jawharat al-Kamal (12x)
3. **Haylala** (tasbih_id=4) - Asrou du Vendredi, 1200 Haylala
4. **Litanies Annexes** (tasbih_id=5) - Salat al-Fatihi, Ayat al-Kursi, etc.

### Design System
- **Couleurs**: Palette emerald/teal (primary), gold (accents), cream (fond)
- **Polices**: Amiri (arabe), Inter (corps), Playfair Display (titres)
- **Mode sombre**: Supporté via class `dark` sur `<html>`
- **RTL**: Support complet pour l'arabe

### Fonctionnalités clés
- **Sibha (chapelet digital)**: Compteur interactif avec progression circulaire SVG et retour haptique
- **Persistance**: Compteurs et préférences sauvegardés en localStorage
- **Multilingue**: Français, Anglais, Arabe (RTL)
- **Mode sombre/clair**: Toggle dans l'en-tête
- **Fond islamique**: Pattern géométrique SVG subtil
- **Navigation step-by-step**: Progression litanie par litanie dans chaque wird

### Package Manager
- **npm** (package-lock.json détecté)

### Table Projets
- **Table**: `projets` (id, user_id → es_system__auth_user.id, titre, description, statut, created_at, updated_at)
- **Statuts**: en_cours, termine, en_attente
- **Routes API**: GET/POST /api/projets, GET/PUT/DELETE /api/projets/:id, GET /api/projets/stats/summary
- **Composant**: `src/pages/ProjectsDashboard.tsx` - Tableau de bord avec CRUD complet
- **Route frontend**: /projets (protégée, avec BottomNav)
- **Actualisation**: Auto-refresh toutes les 30 secondes

### PWA (Progressive Web App)
- **Manifest**: `public/manifest.json` - Complet avec icônes (7 tailles), screenshots, shortcuts
- **Service Worker**: `public/sw.js` - Cache-first pour assets, network-first pour navigation
- **Icônes**: 48, 72, 96, 144, 192, 384, 512px dans `public/icons/`
- **Screenshots**: Wide (1920x1080) et Narrow (750x1334) dans `public/screenshots/`
- **Conversion APK**: Utiliser PWABuilder.com après publication

### Build
```bash

### MONSIEUR CISSE
- avc 1 connexion base de données et Google 
- creation compte super admin pour ajouter et enlever video text au niveau mediatheque
- supprimer 6dhikr sur image 5 slider page  
- laisser vos commentaires apres chaque intervention svp 