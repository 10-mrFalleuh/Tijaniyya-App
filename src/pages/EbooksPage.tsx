import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download } from 'lucide-react';

export default function EbooksPage() {
  const navigate = useNavigate();

  const ebooks = [
    {
      id: 1,
      title: "Jawahiroul Ma'ani",
      author: "Cheikh Ahmed Tijani",
    },
    {
      id: 2,
      title: "Rimah",
      author: "Sidi Omar Foutiyou Tall",
    },
    {
      id: 3,
      title: "Kashf Al-Ilbas",
      author: "Tariqa Tijaniyya",
    },
  ];

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-950 pb-24">

      <div className="bg-primary-800 text-white">
        <div className="max-w-2xl mx-auto p-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-xl font-bold">
            📚 E-books
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-4">

        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="
              bg-white
              dark:bg-gray-900
              rounded-2xl
              shadow
              p-4
              flex
              justify-between
              items-center
            "
          >
            <div>
              <h3 className="font-semibold">
                {ebook.title}
              </h3>

              <p className="text-sm text-gray-500">
                {ebook.author}
              </p>
            </div>

            <button
              className="
                flex items-center gap-2
                bg-primary-600
                text-white
                px-3 py-2
                rounded-xl
              "
            >
              <Download className="w-4 h-4" />
              Lire
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}