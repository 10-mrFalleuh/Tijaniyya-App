import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/appStore';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Plus, Link2, Youtube, Trash2, ExternalLink, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function getYoutubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function MediaLibraryPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mediaLinks, addMediaLink, removeMediaLink, user } = useAppStore();
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const isSuperAdmin = user?.email === 'superadmin@wird.com';

  const handleAdd = () => {
    if (!newTitle.trim() || !newUrl.trim()) return;
    const isYT = newUrl.includes('youtube.com') || newUrl.includes('youtu.be');
    addMediaLink({ title: newTitle, url: newUrl, type: isYT ? 'youtube' : 'web' });
    setNewTitle('');
    setNewUrl('');
    setShowModal(false);
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-cream dark:bg-gray-950 pb-24">
      {/* Header */}
      <div className="glass-header text-white safe-top sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 rounded-lg bg-white/15 active:bg-white/25 touch-target">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-display font-semibold text-lg">{t('mediaLibrary')}</h1>
          </div>
          {isSuperAdmin && (
            <button onClick={() => setShowModal(true)}
              className="p-2 rounded-lg bg-white/15 active:bg-white/25 touch-target">
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {mediaLinks.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
              <Link2 className="w-8 h-8 text-primary-500" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t('noMedia')}</p>
            {isSuperAdmin && (
              <button onClick={() => setShowModal(true)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-medium active:scale-[0.98]">
                {t('addLink')}
              </button>
            )}
          </motion.div>
        ) : (
          <div className="space-y-3">
            {mediaLinks.map((link, i) => (
              <motion.div key={link.id}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                {/* YouTube Thumbnail */}
                {link.type === 'youtube' && getYoutubeId(link.url) && (
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`https://img.youtube.com/vi/${getYoutubeId(link.url)}/mqdefault.jpg`}
                      alt={link.title}
                      className="w-full h-40 object-cover"
                    />
                  </a>
                )}
                <div className="p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                      ${link.type === 'youtube' ? 'bg-red-100 dark:bg-red-900/20' : 'bg-primary-100 dark:bg-primary-900/20'}`}>
                      {link.type === 'youtube'
                        ? <Youtube className="w-4 h-4 text-red-500" />
                        : <Link2 className="w-4 h-4 text-primary-500" />
                      }
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{link.title}</p>
                      <p className="text-xs text-gray-400 truncate">{link.url}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <a href={link.url} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {isSuperAdmin && (
                      <button onClick={() => removeMediaLink(link.id)}
                        className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 text-gray-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm px-4 pb-4"
            onClick={() => setShowModal(false)}>
            <motion.div
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{t('addLink')}</h3>
                <button onClick={() => setShowModal(false)} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="space-y-3">
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                  placeholder={t('linkTitlePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500/50" />
                <input type="url" value={newUrl} onChange={(e) => setNewUrl(e.target.value)}
                  placeholder={t('linkUrlPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200
                    focus:outline-none focus:ring-2 focus:ring-primary-500/50" />
                <button onClick={handleAdd}
                  className="w-full py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm
                    active:scale-[0.98] transition-all touch-target">
                  {t('addBtn')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
