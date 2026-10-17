import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GitFork, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const Topic5ControlSimulator = () => {
  const { lang } = useLanguage();
  const [score, setScore] = useState(82);
  const [isStudent, setIsStudent] = useState(true);
  const [falsyTestItem, setFalsyTestItem] = useState('[]');

  // Evaluate grade branching
  const getBranch = () => {
    if (score >= 90) return { grade: 5, branch: 'if score >= 90', color: 'emerald' };
    if (score >= 80) return { grade: 4, branch: 'elif score >= 80', color: 'blue' };
    if (score >= 70) return { grade: 3, branch: 'elif score >= 70', color: 'cyan' };
    if (score >= 60) return { grade: 2, branch: 'elif score >= 60', color: 'amber' };
    if (score >= 50) return { grade: 1, branch: 'elif score >= 50', color: 'orange' };
    return { grade: 0, branch: 'else (Hylätty)', color: 'rose' };
  };

  const branch = getBranch();

  // Truthy / Falsy dictionary
  const falsyTests = {
    '[]': { isTruthy: false, type: 'list', reason: 'Tyhjä lista on aina Falsy' },
    '[0]': { isTruthy: true, type: 'list', reason: 'Epätyhjä lista sisältää alkion 0, joten se on Truthy!' },
    '0': { isTruthy: false, type: 'int', reason: 'Nolla kokonaislukuna on Falsy' },
    '""': { isTruthy: false, type: 'str', reason: 'Tyhjä merkkijono on Falsy' },
    '"False"': { isTruthy: true, type: 'str', reason: 'Merkkijono ei ole tyhjä, joten se on Truthy!' },
    'None': { isTruthy: false, type: 'NoneType', reason: 'None edustaa arvon puuttumista ja on aina Falsy' },
    '{}': { isTruthy: false, type: 'dict', reason: 'Tyhjä sanakirja on Falsy' },
    '{"id": 1}': { isTruthy: true, type: 'dict', reason: 'Epätyhjä sanakirja on Truthy' }
  };

  const currentFalsy = falsyTests[falsyTestItem];

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <GitFork className="w-5 h-5 text-python-blue-light" />
          {lang === 'fi' ? 'Ohjausrakenteiden ja ehtojen simulaattori' : lang === 'ar' ? 'محاكي الجمل الشرطية وجدول الصواب والخطأ' : 'Control Flow & Truthy/Falsy Simulator'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Testaa if-elif-else haarautumista ja tarkastele mitkä Python-arvot tulkitaan automaattisesti todeksi tai epätodeksi.'
            : lang === 'ar'
            ? 'اختبر تفرع جمل if-elif-else وتعرف على القيم التي تعتبرها بايثون تلقائياً صائبة أو خاطئة.'
            : 'Simulate if-elif-else execution paths live and test Python truthy vs falsy evaluation semantics.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conditional Branching Visualizer */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">1. if-elif-else Haarautumiskaavio</span>
            <span className="text-xs font-mono text-emerald-400">Pisteet: {score}</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-300 font-mono block mb-1">
                {lang === 'fi' ? 'Säädä kurssipisteitä (0..100):' : 'Adjust Score (0..100):'}
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value, 10))}
                className="w-full accent-python-blue cursor-pointer"
              />
            </div>

            {/* Visual branches list */}
            <div className="space-y-1.5 font-mono text-xs">
              {[
                { cond: 'if score >= 90:', label: 'Arvosana 5 (Kiitettävä)', min: 90 },
                { cond: 'elif score >= 80:', label: 'Arvosana 4 (Erittäin hyvä)', min: 80 },
                { cond: 'elif score >= 70:', label: 'Arvosana 3 (Hyvä)', min: 70 },
                { cond: 'elif score >= 60:', label: 'Arvosana 2 (Tyydyttävä)', min: 60 },
                { cond: 'elif score >= 50:', label: 'Arvosana 1 (Välttävä)', min: 50 },
                { cond: 'else:', label: 'Arvosana 0 (Hylätty)', min: 0 }
              ].map((b, idx) => {
                const isActive = (idx === 0 && score >= 90) ||
                  (idx === 1 && score >= 80 && score < 90) ||
                  (idx === 2 && score >= 70 && score < 80) ||
                  (idx === 3 && score >= 60 && score < 70) ||
                  (idx === 4 && score >= 50 && score < 60) ||
                  (idx === 5 && score < 50);

                return (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-python-blue/20 border-python-yellow text-white shadow-glow-yellow'
                        : 'bg-slate-900 border-slate-800 text-slate-400 opacity-60'
                    }`}
                  >
                    <span className={isActive ? 'font-bold text-python-yellow' : ''}>
                      {b.cond}
                    </span>
                    <span className="text-[11px]">{b.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Result callout */}
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Aktiivinen arvosana:</span>
              <span className="text-sm font-mono font-bold text-python-yellow">
                {branch.grade} / 5
              </span>
            </div>
          </div>
        </div>

        {/* Truthy vs Falsy Tester */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">2. Truthy vs Falsy Laboratorio</span>
            <span className="text-[10px] text-slate-400 font-mono">bool(x)</span>
          </div>

          <div className="space-y-3">
            <label className="text-xs text-slate-300 font-mono block">
              {lang === 'fi' ? 'Klikkaa arvoa testataksesi sen totuusarvon:' : 'Select value to test truthiness:'}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {Object.keys(falsyTests).map(k => (
                <button
                  key={k}
                  onClick={() => setFalsyTestItem(k)}
                  className={`py-1.5 px-2 rounded-lg font-mono text-xs transition-all border ${
                    falsyTestItem === k
                      ? 'bg-python-blue text-python-yellow border-python-yellow'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            {/* Evaluation display */}
            <div className={`p-4 rounded-xl border space-y-2 ${
              currentFalsy.isTruthy
                ? 'bg-emerald-950/20 border-emerald-500/40'
                : 'bg-rose-950/20 border-rose-500/40'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-200">
                  bool({falsyTestItem})
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold flex items-center gap-1 ${
                  currentFalsy.isTruthy
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-rose-500/20 text-rose-300'
                }`}>
                  {currentFalsy.isTruthy ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  {currentFalsy.isTruthy ? 'True (Truthy)' : 'False (Falsy)'}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans">
                {currentFalsy.reason}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
