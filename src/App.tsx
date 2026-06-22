import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from './lib/supabase';
import { useAppStore } from './store/appStore';

import Dashboard from './pages/Dashboard';
import WirdReader from './pages/WirdReader';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import MediaLibraryPage from './pages/MediaLibraryPage';
import AboutPage from './pages/AboutPage';
import AudioPage from './pages/AudioPage';
import ProjectsDashboard from './pages/ProjectsDashboard';

import BottomNav from './components/BottomNav';

import SuperAdminLoginPage from './pages/superadmin/SuperAdminLoginPage';
import SuperAdminDashboard from './pages/superadmin/SuperAdminDashboard';

function AppInit() {
  const { login, logout } = useAppStore();

  useEffect(() => {
    const syncUser = (user: any) => {
      login({
        email: user.email || '',
        displayName:
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          'Utilisateur',
        age: '',
        gender: '',
        phone: '',
        country: '',
        provider: user.app_metadata?.provider || 'email',
      });
    };

    // Session existante
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        syncUser(data.session.user);
      }
    });

    // Écoute des changements de session
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          syncUser(session.user);
        } else {
          logout();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [login, logout]);

  return null;
}

function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAppStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInit />

      <Routes>
        {/* Auth */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />

        <Route
          path="/register"
          element={
            <AuthLayout>
              <RegisterPage />
            </AuthLayout>
          }
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Wird Reader */}
        <Route
          path="/wird/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <WirdReader />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Audio */}
        <Route
          path="/audio"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AudioPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Media */}
        <Route
          path="/media"
          element={
            <ProtectedRoute>
              <MainLayout>
                <MediaLibraryPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <MainLayout>
                <SettingsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AboutPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Projects */}
        <Route
          path="/projets"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ProjectsDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Super Admin */}
        <Route
          path="/superadmin/login"
          element={<SuperAdminLoginPage />}
        />

        <Route
          path="/superadmin/dashboard"
          element={<SuperAdminDashboard />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;