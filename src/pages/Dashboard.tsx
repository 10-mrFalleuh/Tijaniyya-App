import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import WirdCard from '../components/WirdCard';
import { wirdSections } from '../data/litanies';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Info,
  Heart,
  Headphones,
  Library,
  BookMarked,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showConditions, setShowConditions] = useState(false);

  return (
    <div className="min-h-screen min-h-[100dvh] bg-cream dark:bg-gray-950 bg-islamic-pattern">

      <Header />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 pb-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            relative overflow-hidden
            rounded-3xl
            mt-4
            p-6
            bg-gradient-to-br
            from-primary-700
            via-primary-800
            to-primary-900
            text-white
            shadow-2xl
          "
        >
          <div className="absolute inset-0 opacity-10 bg-islamic-pattern" />

          <div className="relative z-10 text-center">

            <p className="font-arabic text-3xl sm:text-4xl mb-4 leading-loose">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>

            <h1 className="text-2xl font-bold">
              Tariqa Tijaniyya
            </h1>

            <p className="mt-2 text-sm opacity-90">
              Lecture quotidienne • Wirds • Audios • E-books
            </p>

          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-3 gap-3 mt-5"
        >

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 text-center shadow">
            <p className="text-2xl font-bold text-primary-600">
              0
            </p>
            <p className="text-xs text-gray-500">
              Favoris
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 text-center shadow">
            <p className="text-2xl font-bold text-green-600">
              0
            </p>
            <p className="text-xs text-gray-500">
              Lectures
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 text-center shadow">
            <p className="text-2xl font-bold text-amber-600">
              0
            </p>
            <p className="text-xs text-gray-500">
              Audios
            </p>
          </div>

        </motion.div>

        {/* ACCÈS RAPIDE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6"
        >

          <h2 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">
            Accès rapide
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={() => navigate('/')}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 flex flex-col items-center justify-center hover:scale-[1.02] transition"
            >
              <BookMarked className="w-8 h-8 text-primary-600 mb-2" />
              <span className="font-medium">
                Wirds
              </span>
            </button>

            <button
              onClick={() => navigate('/audio')}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 flex flex-col items-center justify-center hover:scale-[1.02] transition"
            >
              <Headphones className="w-8 h-8 text-green-600 mb-2" />
              <span className="font-medium">
                Audios
              </span>
            </button>

            <button
              className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 flex flex-col items-center justify-center hover:scale-[1.02] transition"
            >
              <Library className="w-8 h-8 text-amber-600 mb-2" />
              <span className="font-medium">
                E-books
              </span>
            </button>

            <button
              className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 flex flex-col items-center justify-center hover:scale-[1.02] transition"
            >
              <Heart className="w-8 h-8 text-red-500 mb-2" />
              <span className="font-medium">
                Favoris
              </span>
            </button>

          </div>
        </motion.div>

        {/* CONDITIONS */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          onClick={() =>
            setShowConditions(!showConditions)
          }
          className="
            w-full
            mt-6
            flex
            items-center
            justify-between
            rounded-2xl
            p-4
            bg-primary-50
            dark:bg-primary-900/20
            border
            border-primary-100
            dark:border-primary-800
          "
        >
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-primary-600" />
            <span className="font-medium">
              {t('conditions')}
            </span>
          </div>

          <ChevronRight
            className={`w-5 h-5 transition-transform ${
              showConditions ? 'rotate-90' : ''
            }`}
          />
        </motion.button>

        <AnimatePresence>
          {showConditions && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="overflow-hidden"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 mt-3 shadow">

                <div className="flex gap-3">

                  <BookOpen className="w-5 h-5 text-primary-600 mt-1" />

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('conditionsText')}
                  </p>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WIRDS */}
        <div className="mt-8">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Mes Wirds
            </h2>

            <button className="text-primary-600 text-sm font-medium">
              Voir tout
            </button>

          </div>

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

        {/* FOOTER PREMIUM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mt-10
            rounded-3xl
            p-6
            text-center
            bg-white
            dark:bg-gray-900
            shadow
          "
        >

          <p className="font-arabic text-xl mb-3 text-primary-700 dark:text-primary-300">
            سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Application officielle de lecture et de pratique
            de la Tariqa Tijaniyya
          </p>

        </motion.div>

      </main>
    </div>
  );
}