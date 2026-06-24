import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const loadFavorites = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from('favorites')
      .select('wird_id')
      .eq('user_id', user.id);

    setFavorites(
      data?.map((item) => item.wird_id) || []
    );
  };

  const toggleFavorite = async (wirdId: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const isFavorite = favorites.includes(wirdId);

    if (isFavorite) {
      await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('wird_id', wirdId);
    } else {
      await supabase
        .from('favorites')
        .insert({
          user_id: user.id,
          wird_id: wirdId,
        });
    }

    loadFavorites();
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return {
    favorites,
    toggleFavorite,
  };
}