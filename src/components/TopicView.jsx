import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { TOPICS } from '../data/topicsData';
import { UI_TRANSLATIONS } from '../data/translations';
import { CodeBlock } from './CodeBlock';
import { QuizWidget } from './QuizWidget';
import { parseTheoryContent, formatRichText } from '../utils/markup';
import { playClickSound, playNavigationPop } from '../utils/audio';
import {
  CheckCircle2,
  Circle,
  Clock,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Code2,
  Cpu
} from 'lucide-react';

// Import all 12 bespoke simulators
import { Topic1ArchSimulator } from './simulators/Topic1ArchSimulator';
import { Topic2MemorySimulator } from './simulators/Topic2MemorySimulator';
import { Topic3IOSimulator } from './simulators/Topic3IOSimulator';
import { Topic4StringSimulator } from './simulators/Topic4StringSimulator';
import { Topic5ControlSimulator } from './simulators/Topic5ControlSimulator';
import { Topic6LoopSimulator } from './simulators/Topic6LoopSimulator';
import { Topic7FileSimulator } from './simulators/Topic7FileSimulator';
import { Topic8ScopeSimulator } from './simulators/Topic8ScopeSimulator';
import { Topic9ModuleSimulator } from './simulators/Topic9ModuleSimulator';
import { Topic10ExceptionSimulator } from './simulators/Topic10ExceptionSimulator';
import { Topic11DataStructuresSimulator } from './simulators/Topic11DataStructuresSimulator';
import { Topic12OOPSimulator } from './simulators/Topic12OOPSimulator';

const SIMULATORS = {
  1: Topic1ArchSimulator,
  2: Topic2MemorySimulator,
  3: Topic3IOSimulator,
  4: Topic4StringSimulator,
  5: Topic5ControlSimulator,
  6: Topic6LoopSimulator,
  7: Topic7FileSimulator,
  8: Topic8ScopeSimulator,
  9: Topic9ModuleSimulator,
  10: Topic10ExceptionSimulator,
  11: Topic11DataStructuresSimulator,
  12: Topic12OOPSimulator,
};

export const TopicView = ({ onOpenPlaygroundWithCode }) => {
  const { lang, isRTL } = useLanguage();
  const { activeTopicId, setActiveTopicId, toggleComplete, isCompleted } = useProgress();
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fi;

  const topic = TOPICS.find(t => t.id === activeTopicId) || TOPICS[0];
  const completed = isCompleted(topic.id);
  const SimulatorComponent = SIMULATORS[topic.id];

  const handlePrev = () => {
    if (activeTopicId > 1) {
      playNavigationPop();
      setActiveTopicId(activeTopicId - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (activeTopicId < TOPICS.length) {
      playNavigationPop();
      setActiveTopicId(activeTopicId + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Topic Header & Meta Bar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-navy-card/90 backdrop-blur-md space-y-5 border border-navy-border shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background gradient with crimson & gold accents */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-crimson/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-crimson/20 text-crimson-light border border-crimson/40">
                Topic #{topic.id} / 12
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-navy text-slate-300 border border-navy-border">
                {t[topic.level] || topic.level}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-navy text-slate-300 border border-navy-border">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {topic.estimatedMinutes} {t.minutes}
              </span>
            </div>

            {/* Toggle Complete Button */}
            <button
              onClick={() => {
                playClickSound();
                toggleComplete(topic.id);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md ${
                completed
                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-600/30'
                  : 'bg-navy hover:bg-slate-800 text-slate-300 border border-navy-border'
              }`}
            >
              {completed ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.markedCompleted}</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-slate-400" />
                  <span>{t.markComplete}</span>
                </>
              )}
            </button>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-sans">
            {topic.title[lang] || topic.title.fi}
          </h1>

          <div className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {formatRichText(topic.summary[lang] || topic.summary.fi)}
          </div>
        </div>
      </div>

      {/* SECTION 1: THEORY & CONCEPTS (Clean Semantic HTML with zero raw markdown markers) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-navy-border pb-3">
          <BookOpen className="w-5 h-5 text-crimson-light" />
          <h2 className="text-lg font-bold text-white font-sans">
            {t.theoryTab}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-navy-card/80 backdrop-blur-md border border-navy-border shadow-xl">
          {parseTheoryContent(topic.theory[lang] || topic.theory.fi)}
        </div>
      </section>

      {/* SECTION 2: BESPOKE INTERACTIVE SIMULATOR */}
      {SimulatorComponent && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-navy-border pb-3">
            <Cpu className="w-5 h-5 text-gold" />
            <div>
              <h2 className="text-lg font-bold text-white font-sans">
                {t.simulator}
              </h2>
            </div>
          </div>

          <SimulatorComponent />
        </section>
      )}

      {/* SECTION 3: CODE SNIPPETS & SANDBOX */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-navy-border pb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white font-sans">
              {t.codeTab}
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Python 3.12+ Modern
          </span>
        </div>

        <CodeBlock
          code={topic.codeSnippet}
          filename={`topic_${topic.id}_${topic.slug.replace(/-/g, '_')}.py`}
          onRunInPlayground={(code) => {
            playClickSound();
            onOpenPlaygroundWithCode(code);
          }}
        />
      </section>

      {/* SECTION 4: PRO TIPS & BEST PRACTICES */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-navy-border pb-3">
          <Lightbulb className="w-5 h-5 text-gold" />
          <h2 className="text-lg font-bold text-white font-sans">
            {t.proTipsTab}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-navy-card/80 border border-gold/25 space-y-3.5 shadow-xl">
          {(topic.proTips[lang] || topic.proTips.fi).map((tip, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <span className="w-5 h-5 rounded-full bg-gold/20 text-gold border border-gold/40 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="leading-relaxed">
                {formatRichText(tip)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: KNOWLEDGE CHECK QUIZ */}
      {topic.quiz && (
        <section className="space-y-4">
          <QuizWidget quiz={topic.quiz} topicId={topic.id} />
        </section>
      )}

      {/* BOTTOM NAVIGATION: PREVIOUS / NEXT TOPIC */}
      <div className="flex items-center justify-between pt-6 border-t border-navy-border">
        <button
          onClick={handlePrev}
          disabled={activeTopicId === 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-card border border-navy-border hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-mono font-bold text-slate-200 transition-all"
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{t.previousTopic}</span>
        </button>

        <span className="text-xs font-mono text-slate-500">
          {activeTopicId} / {TOPICS.length}
        </span>

        <button
          onClick={handleNext}
          disabled={activeTopicId === TOPICS.length}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-crimson to-rose-600 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-mono font-bold text-white transition-all shadow-glow-crimson"
        >
          <span>{t.nextTopic}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};
