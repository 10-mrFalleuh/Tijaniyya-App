import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Props {
  children: ReactNode;
}

export default function AdminRoute({
  children,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] =
    useState(false);

  useEffect(() => {
    checkRole();
  }, []);

  const checkRole = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setAuthorized(false);
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    console.log('USER:', user);
    console.log('PROFILE DATA:', data);
    console.log('PROFILE ERROR:', error);

    if (error) {
      setAuthorized(false);
      return;
    }

    if (
      data?.role === 'super_admin' ||
      data?.role === 'admin'
    ) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  } catch (error) {
    console.error(error);
    setAuthorized(false);
  } finally {
    setLoading(false);
  }
};

  return <>{children}</>;
}