import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import WirdCard from '../components/WirdCard';
import { wirdSections } from '../data/litanies';
import { motion } from 'framer-motion';
import { BookOpen, Info } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const { t } = useTranslation();
  const [showConditions, setShowConditions] = useState(false);

  return (
    <div className="min-h-screen min-h-[100dvh] bg-cream dark:bg-gray-950 bg-islamic-pattern">
      <Header />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 pb-8">
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center py-5 sm:py-8"
        >
          <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-primary-800 dark:text-primary-300 leading-relaxed">
            {t('bismillah')}
          </p>
        </motion.div>

        {/* Conditions banner */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => setShowConditions(!showConditions)}
          className="w-full mb-4 flex items-center gap-3 p-3 sm:p-4 rounded-xl touch-target
                     bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30
                     text-primary-800 dark:text-primary-200 text-sm sm:text-base transition-colors
                     active:bg-primary-100 dark:active:bg-primary-900/30"
        >
          <Info className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="font-medium">{t('conditions')}</span>
        </motion.button>

        {showConditions && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('conditionsText')}
              </p>
            </div>
          </motion.div>
        )}

        {/* Wird Cards Grid - 2 cols mobile, 2 cols tablet with bigger cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {wirdSections.map((section, index) => (
            <WirdCard key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 sm:mt-12 space-y-1"
        >
          <p className="font-arabic text-sm sm:text-base text-gray-400 dark:text-gray-600">
            سُبْحَانَ ربّكَ ربِّ العِزّةِ عمَّا يَصِفُونَ
          </p>
          <p className="text-[11px] sm:text-xs text-gray-300 dark:text-gray-700">
            Tariqa Tijaniyya
          </p>
        </motion.div>
        {/* Bottom padding for nav */}
        <div className="h-20" />
      </main>
    </div>
  );
}
