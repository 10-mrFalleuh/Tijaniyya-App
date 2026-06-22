import { useRef, useEffect, useState } from "react";
import { client } from "../../api/client";
import { useNavigate } from "react-router-dom";

export default function SuperAdminLoginPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const authRenderedRef = useRef(false);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    client.auth.getSession().then((session) => {
      if (session.data?.user) {
        // Already logged in, redirect to dashboard
        navigate("/superadmin/dashboard");
      } else {
        setIsReady(true);
      }
    });
  }, [navigate]);

  useEffect(() => {
    if (!isReady || authRenderedRef.current || !containerRef.current) return;
    authRenderedRef.current = true;

    client.auth.renderAuthUI(containerRef.current, {
      redirectTo: "/superadmin/dashboard",
      onLogin: (user) => {
        console.log("Superadmin logged in:", user.email);
      },
      onError: (error) => {
        console.error("Auth error:", error);
      },
    });
  }, [isReady]);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-50 dark:bg-emerald-950">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-800 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          SuperAdmin
        </h1>
        <p className="text-emerald-100">
          Connexion à l'administration
        </p>
      </div>
      
      <div 
        ref={containerRef} 
        style={{ width: "100%", maxWidth: 420 }}
        className="bg-white rounded-3xl shadow-2xl p-6"
      />
      
      <div className="mt-6">
        <a 
          href="/login" 
          className="text-emerald-100 hover:text-white text-sm underline"
        >
          Retour à la connexion utilisateur
        </a>
      </div>
    </div>
  );
}
