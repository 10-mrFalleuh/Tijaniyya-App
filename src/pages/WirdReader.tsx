import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/appStore';
import { wirdSections } from '../data/litanies';
import Sibha from '../components/Sibha';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export default function WirdReader() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language, resetAllCounters } = useAppStore();

  const section = wirdSections.find((s) => s.id === Number(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!section) {
    return (
      <div className="min-h-screen min-h-[100dvh] flex items-center justify-center bg-cream dark:bg-gray-950">
        <p className="text-gray-500">Wird not found</p>
      </div>
    );
  }

  // Show coming soon message if no litanies (like annexe section)
  if (section.litanies.length === 0) {
    return (
      <div className="min-h-screen min-h-[100dvh] bg-cream dark:bg-gray-950 flex flex-col">
        <header className="glass-header text-white safe-top sticky top-0 z-50">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 text-sm touch-target hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{t('back')}</span>
            </button>
            <div className="text-center flex-1 mx-4">
              <p className="font-arabic text-base sm:text-lg">{section.nameAr}</p>
            </div>
            <div className="w-8" />
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
              <span className="text-4xl">⏳</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {t('comingSoon')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
              {language === 'ar' ? 'قيد التطوير' 
                : language === 'en' ? 'Under development'
                : language === 'ms' ? 'Sedang dibangun'
                : language === 'es' ? 'En desarrollo'
                : language === 'tr' ? 'Geliştirilmekte'
                : 'En cours de développement'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const litany = section.litanies[currentIndex];
  const totalSteps = section.litanies.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSteps - 1;

  const sectionName = language === 'ar' ? section.nameAr
    : language === 'en' ? section.nameEn
    : language === 'ms' ? (section.nameFr || section.nameEn)
    : language === 'es' ? (section.nameFr || section.nameEn)
    : language === 'tr' ? (section.nameFr || section.nameEn)
    : language === 'fa' ? (section.nameFr || section.nameEn)
    : section.nameFr;

  const litanyName = language === 'ar' ? litany.arName
    : language === 'en' ? litany.enName
    : language === 'ms' ? (litany.frName || litany.enName)
    : language === 'es' ? (litany.frName || litany.enName)
    : language === 'tr' ? (litany.frName || litany.enName)
    : language === 'fa' ? (litany.frName || litany.enName)
    : litany.frName;

  // Get translation for the litany content - supports all 7 languages
  const getTranslation = (litany: typeof section.litanies[0]) => {
    switch (language) {
      case 'ar': return litany.arContent;
      case 'en': return litany.enContent;
      case 'ms': return litany.msContent || litany.frContent;
      case 'es': return litany.esContent || litany.frContent;
      case 'tr': return litany.trContent || litany.frContent;
      case 'fa': return litany.faContent || litany.frContent;
      default: return litany.frContent;
    }
  };

  const translation = getTranslation(litany);

  const goNext = useCallback(() => {
    if (!isLast) setCurrentIndex((i) => i + 1);
  }, [isLast]);

  const goPrev = useCallback(() => {
    if (!isFirst) setCurrentIndex((i) => i - 1);
  }, [isFirst]);

  const handleResetAll = () => {
    resetAllCounters(section.id);
  };

  return (
    <div className="h-screen h-[100dvh] bg-cream dark:bg-gray-950 flex flex-col overflow-hidden">
      {/* Top bar */}
      <header className="glass-header text-white safe-top z-50 flex-shrink-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm touch-target hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">{t('back')}</span>
          </button>

          <div className="text-center flex-1 mx-4">
            <p className="font-arabic text-sm sm:text-base">{section.nameAr}</p>
            <p className="text-[10px] opacity-75 truncate">{sectionName}</p>
          </div>

          <button
            onClick={handleResetAll}
            className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/35 
                       transition-colors touch-target"
            title={t('resetAll')}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Step indicator */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-1.5">
          <div className="flex gap-0.5">
            {section.litanies.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`flex-1 h-1 rounded-full transition-all duration-300
                  ${i === currentIndex 
                    ? 'bg-white' 
                    : i < currentIndex 
                      ? 'bg-white/50' 
                      : 'bg-white/20'
                  }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Content - scrollable area for text only */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-2 flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col h-full"
          >
            {/* Text Content Area - Scrollable if needed, but tries to fit */}
            <div className="flex-1 overflow-y-auto flex flex-col min-h-0 pb-2">
              {/* Litany name */}
              <div className="text-center mb-2">
                <h2 className="font-arabic text-base sm:text-lg text-primary-800 dark:text-primary-300">
                  {litany.arName}
                </h2>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {litanyName}
                </p>
              </div>

              {/* Arabic text */}
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 
                              shadow-sm p-3 sm:p-4 mb-2 shrink-0">
                <p className="arabic-text text-base sm:text-lg md:text-xl leading-[2.2] sm:leading-[2.4] text-gray-900 dark:text-gray-100 text-center">
                  {litany.arContent}
                </p>
              </div>

              {/* Transliteration & Translation Container */}
              <div className="flex flex-col gap-2 shrink-0">
                {/* Transliteration */}
                {litany.transcription && (
                  <div className="px-1">
                    <p className="text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-0.5 font-medium">
                      {t('transliteration')}
                    </p>
                    <p className="transliteration-text text-[11px] sm:text-xs leading-snug">
                      {litany.transcription}
                    </p>
                  </div>
                )}

                {/* Translation */}
                <div className="px-1">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-0.5 font-medium">
                    {t('translation')}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 leading-snug line-clamp-3 hover:line-clamp-none transition-all">
                    {translation}
                  </p>
                </div>
              </div>
            </div>

            {/* Sibha counter - Fixed at bottom of main area */}
            {litany.total > 1 && (
              <div className="shrink-0 pt-2 border-t border-gray-100 dark:border-gray-800/50">
                <Sibha
                  wirdId={section.id}
                  litanyId={litany.id}
                  target={litany.total}
                  onComplete={goNext}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation footer */}
      <footer className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md 
                          border-t border-gray-100 dark:border-gray-800 safe-bottom flex-shrink-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={isFirst}
            className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium
                        transition-all duration-200 touch-target
                        ${isFirst
                          ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
                        }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t('previous')}</span>
          </button>

          <button
            onClick={isLast ? () => navigate('/') : goNext}
            className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium
                        transition-all duration-200 active:scale-95 touch-target
                        ${isLast
                          ? 'bg-gold-400 text-white hover:bg-gold-500'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                        }`}
          >
            {isLast ? t('completed') : t('next')}
            {!isLast && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </footer>
    </div>
  );
}
