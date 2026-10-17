import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { HelpCircle, CheckCircle, XCircle, Award } from 'lucide-react';
import { playClickSound, playSuccessChime } from '../utils/audio';
import { formatRichText } from '../utils/markup';

export const QuizWidget = ({ quiz, topicId }) => {
  const { lang } = useLanguage();
  const { toggleComplete, isCompleted } = useProgress();
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fi;

  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selectedOption === quiz.correctId;

  const handleSelect = (id) => {
    if (submitted) return;
    playClickSound();
    setSelectedOption(id);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    playClickSound();
    setSubmitted(true);
    if (selectedOption === quiz.correctId) {
      playSuccessChime();
      if (!isCompleted(topicId)) {
        toggleComplete(topicId);
      }
    }
  };

  const handleReset = () => {
    playClickSound();
    setSelectedOption(null);
    setSubmitted(false);
  };

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-4 border border-navy-border shadow-xl">
      <div className="flex items-center justify-between border-b border-navy-border pb-3">
        <h4 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-gold" />
          {t.quizTab}
        </h4>
        <span className="text-xs font-mono text-slate-400 bg-navy-card px-2.5 py-1 rounded-full border border-navy-border">
          Interactive Knowledge Check
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-semibold text-slate-200 leading-relaxed">
          {formatRichText(quiz.question[lang] || quiz.question.fi)}
        </p>

        {/* Options */}
        <div className="space-y-2">
          {quiz.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isThisCorrect = opt.id === quiz.correctId;

            let borderStyle = 'border-navy-border bg-navy/60 hover:border-slate-600';
            if (submitted) {
              if (isThisCorrect) {
                borderStyle = 'border-emerald-500 bg-emerald-950/30 text-emerald-300';
              } else if (isSelected && !isThisCorrect) {
                borderStyle = 'border-rose-500 bg-rose-950/30 text-rose-300';
              }
            } else if (isSelected) {
              borderStyle = 'border-crimson bg-crimson/15 text-gold shadow-glow-crimson';
            }

            return (
              <label
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${borderStyle}`}
              >
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${
                  isSelected
                    ? 'border-crimson bg-crimson text-white'
                    : 'border-slate-600 bg-slate-800 text-slate-400'
                }`}>
                  {opt.id.toUpperCase()}
                </div>
                <span className="text-xs font-medium text-slate-200 flex-1">
                  {formatRichText(opt.text[lang] || opt.text.fi)}
                </span>
                {submitted && isThisCorrect && (
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
                {submitted && isSelected && !isThisCorrect && (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
              </label>
            );
          })}
        </div>

        {/* Submit / Reset Actions */}
        <div className="flex items-center gap-3 pt-2">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-crimson to-rose-600 hover:brightness-110 disabled:opacity-50 text-white text-xs font-bold font-mono transition-all shadow-glow-crimson"
            >
              {t.checkAnswer}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl bg-navy-card hover:bg-slate-800 text-slate-200 text-xs font-mono font-bold transition-all border border-navy-border"
            >
              {lang === 'fi' ? 'Kokeile uudelleen' : 'Try Again'}
            </button>
          )}
        </div>

        {/* Feedback Message */}
        {submitted && (
          <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${
            isCorrect
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
          }`}>
            <div className="flex items-center gap-2 font-bold text-sm">
              {isCorrect ? (
                <>
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>{t.correctAnswer}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span>{t.incorrectAnswer}</span>
                </>
              )}
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">
              {formatRichText(quiz.explanation[lang] || quiz.explanation.fi)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
