import { useNavigate } from 'react-router-dom';
import WirdCard from '../components/WirdCard';
import { wirdSections } from '../data/litanies';

export default function WirdsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-950 pb-24">

      <div className="max-w-2xl mx-auto p-4">

        <h1 className="text-2xl font-bold mb-6">
          📖 Mes Wirds
        </h1>

        <div className="grid grid-cols-2 gap-4">

          {wirdSections.map((section, index) => (
            <WirdCard
              key={section.id}
              section={section}
              index={index}
            />
          ))}

        </div>

      </div>

    </div>
  );
}