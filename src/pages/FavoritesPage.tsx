import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
} from 'lucide-react';

export default function FavoritesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-950 pb-24">

      <div className="bg-primary-800 text-white">
        <div className="max-w-2xl mx-auto p-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-xl font-bold">
            ❤️ Favoris
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4">

        <div
          className="
            bg-white
            dark:bg-gray-900
            rounded-2xl
            shadow
            p-10
            text-center
          "
        >
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />

          <h2 className="font-semibold text-lg">
            Aucun favori
          </h2>

          <p className="text-gray-500 mt-2">
            Ajoutez vos wirds, audios ou e-books favoris.
          </p>

        </div>

      </div>
    </div>
  );
}