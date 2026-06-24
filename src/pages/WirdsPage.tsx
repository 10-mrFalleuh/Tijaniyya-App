import { useNavigate } from 'react-router-dom';
import WirdCard from '../components/WirdCard';
import { wirdSections } from '../data/litanies';
import { Heart } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';

export default function WirdsPage() {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-950 pb-24">

      <div className="max-w-2xl mx-auto p-4">

        <h1 className="text-2xl font-bold mb-6">
          📖 Mes Wirds
        </h1>

        <div className="grid grid-cols-2 gap-4">

  {wirdSections.map((section, index) => {

    const isFavorite =
      favorites.includes(String(section.id));

    return (
      <div
        key={section.id}
        className="relative"
      >

        {isFavorite && (
          <div
            className="
              absolute
              top-2
              left-2
              z-20
              bg-white/90
              rounded-full
              p-1.5
              shadow
            "
          >
            <Heart
              className="
                w-4
                h-4
                fill-red-500
                text-red-500
              "
            />
          </div>
        )}

        <WirdCard
          section={section}
          index={index}
        />

      </div>
    );
  })}

</div>

      </div>

    </div>
  );
}