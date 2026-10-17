import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { TOPICS } from '../data/topicsData';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Terminal,
  Boxes,
  Sliders,
  Type,
  GitFork,
  Repeat,
  FileText,
  Code2,
  Package,
  AlertTriangle,
  Layers,
  Search,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { playClickSound, playNavigationPop } from '../utils/audio';

const ICON_MAP = {
  Terminal,
  Boxes,
  Sliders,
  Type,
  GitFork,
  Repeat,
  FileText,
  Code2,
  Package,
  AlertTriangle,
  Layers,
};

export const Sidebar = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const {
    activeTopicId,
    setActiveTopicId,
    isCompleted,
    searchQuery,
    setSearchQuery,
    completionPercentage,
    completedTopics
  } = useProgress();
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fi;

  const filteredTopics = TOPICS.filter(topic => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const title = (topic.title[lang] || topic.title.fi).toLowerCase();
    const summary = (topic.summary[lang] || topic.summary.fi).toLowerCase();
    return title.includes(q) || summary.includes(q) || topic.slug.includes(q);
  });

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-navy-dark/80 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-72 sm:w-80 bg-navy/85 backdrop-blur-md border-r border-navy-border transition-transform duration-300 flex flex-col shadow-hyper-card ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Search Input Box */}
        <div className="p-4 border-b border-navy-border">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-navy-card border border-navy-border rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-crimson transition-colors"
            />
          </div>

          {/* Overall progress indicator */}
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>{t.progress}: {completedTopics.length}/12</span>
            <span className="text-gold font-bold">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-navy-card rounded-full h-1.5 mt-1 overflow-hidden border border-navy-border">
            <div
              className="bg-gradient-to-r from-crimson to-gold h-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Topics List Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">
            {t.topics} ({filteredTopics.length})
          </div>

          {filteredTopics.map((topic) => {
            const Icon = ICON_MAP[topic.icon] || Terminal;
            const isActive = activeTopicId === topic.id;
            const completed = isCompleted(topic.id);

            return (
              <button
                key={topic.id}
                onClick={() => {
                  playNavigationPop();
                  setActiveTopicId(topic.id);
                  if (window.innerWidth < 1024) onClose();
                }}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border ${
                  isActive
                    ? 'bg-crimson/15 border-crimson text-white shadow-glow-crimson'
                    : 'border-transparent text-slate-300 hover:bg-navy-card/80 hover:text-white'
                }`}
              >
                {/* Topic Icon with number */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                  isActive
                    ? 'bg-crimson border-crimson-light text-white shadow-sm'
                    : completed
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400'
                    : 'bg-navy-card border-navy-border text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] font-mono text-slate-500">
                      #{topic.id}
                    </span>
                    {completed && (
                      <span className="flex items-center text-emerald-400 text-[10px] font-mono gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-semibold truncate leading-tight font-sans">
                    {topic.title[lang] || topic.title.fi}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-gold" />
                      {topic.estimatedMinutes} {t.minutes}
                    </span>
                    <span>&bull;</span>
                    <span className="capitalize">{t[topic.level] || topic.level}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-navy-border bg-navy-card text-center">
          <span className="text-[11px] font-mono text-slate-400">
            Python Learning Hub &bull; Interactive Guide
          </span>
        </div>
      </aside>
    </>
  );
};
