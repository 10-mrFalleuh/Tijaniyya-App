import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
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
  const { theme, language, setTheme, setLanguage } = useAppStore();

  useEffect(() => {
    setTheme(theme);
    setLanguage(language);
  }, []);

  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAppStore();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function MainLayout({ children }: { children: React.ReactNode }) {
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
        {/* Auth routes */}
        <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />

        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoute><MainLayout><Dashboard /></MainLayout></ProtectedRoute>} />
        <Route path="/wird/:id" element={<ProtectedRoute><MainLayout><WirdReader /></MainLayout></ProtectedRoute>} />
        <Route path="/audio" element={<ProtectedRoute><MainLayout><AudioPage /></MainLayout></ProtectedRoute>} />
        <Route path="/media" element={<ProtectedRoute><MainLayout><MediaLibraryPage /></MainLayout></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><MainLayout><SettingsPage /></MainLayout></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><MainLayout><AboutPage /></MainLayout></ProtectedRoute>} />
        <Route path="/projets" element={<ProtectedRoute><MainLayout><ProjectsDashboard /></MainLayout></ProtectedRoute>} />

        {/* SuperAdmin routes */}
        <Route path="/superadmin/login" element={<SuperAdminLoginPage />} />
        <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
