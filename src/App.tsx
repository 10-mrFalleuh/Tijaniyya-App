import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from './lib/supabase';
import { useAppStore } from './store/appStore';

import Dashboard from './pages/Dashboard';
import WirdReader from './pages/WirdReader';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import AccountSecurityPage from './pages/AccountSecurityPage';
import EditProfilePage from './pages/EditProfilePage';
import MediaLibraryPage from './pages/MediaLibraryPage';
import AboutPage from './pages/AboutPage';
import AudioPage from './pages/AudioPage';
import ProjectsDashboard from './pages/ProjectsDashboard';

import BottomNav from './components/BottomNav';

import SuperAdminLoginPage from './pages/superadmin/SuperAdminLoginPage';
import SuperAdminDashboard from './pages/superadmin/SuperAdminDashboard';
import UsersManagementPage from './pages/superadmin/UsersManagementPage';

function AppInit() {
  const {
    login,
    logout,
    setAuthLoading,
  } = useAppStore();

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
        provider:
          user.app_metadata?.provider || 'email',
      });
    };

    const initializeAuth = async () => {
      try {
        const { data } =
          await supabase.auth.getSession();

        if (data.session?.user) {
          syncUser(data.session.user);
        }
      } catch (error) {
        console.error(
          'Erreur récupération session:',
          error
        );
      } finally {
        setAuthLoading(false);
      }
    };

    initializeAuth();

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

    return () => {
      subscription.unsubscribe();
    };
  }, [login, logout, setAuthLoading]);

  return null;
}

function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isAuthenticated,
    authLoading,
  } = useAppStore();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600 mx-auto mb-3" />
          <p className="text-gray-600 dark:text-gray-300">
            Chargement...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
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

        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/profile/edit"
  element={
    <ProtectedRoute>
      <MainLayout>
        <EditProfilePage />
      </MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/account-security"
  element={
    <ProtectedRoute>
      <MainLayout>
        <AccountSecurityPage />
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
  path="/superadmin"
  element={
    <ProtectedRoute>
      <MainLayout>
        <SuperAdminDashboard />
      </MainLayout>
    </ProtectedRoute>
  }
/>

       <Route
  path="/superadmin/dashboard"
  element={
    <ProtectedRoute>
      <MainLayout>
        <SuperAdminDashboard />
      </MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/superadmin/users"
  element={
    <ProtectedRoute>
      <MainLayout>
        <UsersManagementPage />
      </MainLayout>
    </ProtectedRoute>
  }
/>

<Route
  path="/superadmin/users"
  element={<UsersManagementPage />}
/>

        {/* Catch-all */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;