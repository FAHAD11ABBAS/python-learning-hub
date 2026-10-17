import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, Target, ArrowRight, Sparkles } from 'lucide-react';

export const Topic8ScopeSimulator = () => {
  const { lang } = useLanguage();
  const [selectedLookup, setSelectedLookup] = useState('x');

  const lookups = {
    x: {
      varName: 'x',
      foundAt: 'Local',
      scopeLevel: 1,
      val: '100',
      reason: 'Löydetty heti paikallisesta näkyvyysalueesta (Local Scope sisällä sisin_funktio()).'
    },
    kerroin: {
      varName: 'kerroin',
      foundAt: 'Enclosing',
      scopeLevel: 2,
      val: '2.5',
      reason: 'Ei löytynyt paikallisesti, löytyi ympäröivästä funktiosta (Enclosing Scope ulompi_funktio()).'
    },
    APP_VERSION: {
      varName: 'APP_VERSION',
      foundAt: 'Global',
      scopeLevel: 3,
      val: '"3.2.0"',
      reason: 'Ei löytynyt paikallisesti eikä ympäröivästä: löytyi tiedoston päätasolta (Global Scope).'
    },
    len: {
      varName: 'len',
      foundAt: 'Built-in',
      scopeLevel: 4,
      val: '<built-in function len>',
      reason: 'Ei löytynyt omasta koodista: löytyi Pythonin sisäänrakennetuista nimistä (Built-in Scope).'
    }
  };

  const current = lookups[selectedLookup];

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-python-yellow" />
          {lang === 'fi' ? 'LEGB-näkyvyysalueiden resoluutiosimulaattori' : lang === 'ar' ? 'محاكي هرمية نطاق المتغيرات (قاعدة LEGB)' : 'LEGB Scope Hierarchy Simulator'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Tarkastele missä järjestyksessä Python etsii muuttujia: Local -> Enclosing -> Global -> Built-in.'
            : lang === 'ar'
            ? 'شاهد الترتيب الهرمي الذي تتبعه بايثون عند البحث عن أسماء المتغيرات.'
            : 'Trace variable lookups through concentric scopes: Local, Enclosing, Global, and Built-in.'}
        </p>
      </div>

      {/* Select variable to look up */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-mono text-slate-400 font-bold">
          {lang === 'fi' ? 'Kokeile hakea muuttujaa:' : 'Test variable lookup:'}
        </span>
        {Object.keys(lookups).map(k => (
          <button
            key={k}
            onClick={() => setSelectedLookup(k)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedLookup === k
                ? 'bg-python-blue text-python-yellow shadow-glow-yellow border border-python-yellow/40'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Concentric / Nested Scope Cards */}
      <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-3">
        {/* Built-in Outer Ring */}
        <div className={`p-4 rounded-xl border transition-all ${
          current.foundAt === 'Built-in'
            ? 'bg-purple-950/30 border-purple-400 shadow-lg'
            : 'bg-slate-900/40 border-slate-800'
        }`}>
          <div className="flex justify-between items-center text-xs font-mono mb-2">
            <span className="font-bold text-purple-400">4. Built-in Scope (len, print, range, int)</span>
            {current.foundAt === 'Built-in' && <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-bold">LÖYTYI TÄÄLTÄ</span>}
          </div>

          {/* Global Ring */}
          <div className={`p-4 rounded-xl border transition-all ${
            current.foundAt === 'Global'
              ? 'bg-blue-950/30 border-python-blue-light shadow-lg'
              : 'bg-slate-900/60 border-slate-800'
          }`}>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="font-bold text-python-blue-light">3. Global Scope (APP_VERSION = "3.2.0")</span>
              {current.foundAt === 'Global' && <span className="text-xs bg-python-blue/30 text-python-yellow px-2 py-0.5 rounded font-bold">LÖYTYI TÄÄLTÄ</span>}
            </div>

            {/* Enclosing Ring */}
            <div className={`p-4 rounded-xl border transition-all ${
              current.foundAt === 'Enclosing'
                ? 'bg-amber-950/30 border-amber-400 shadow-lg'
                : 'bg-slate-900/80 border-slate-800'
            }`}>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="font-bold text-amber-400">2. Enclosing Scope (ulompi_funktio &rarr; kerroin = 2.5)</span>
                {current.foundAt === 'Enclosing' && <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">LÖYTYI TÄÄLTÄ</span>}
              </div>

              {/* Local Core */}
              <div className={`p-4 rounded-xl border transition-all ${
                current.foundAt === 'Local'
                  ? 'bg-emerald-950/40 border-emerald-400 shadow-lg'
                  : 'bg-slate-950 border-slate-800'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-emerald-400">1. Local Scope (sisin_funktio &rarr; x = 100)</span>
                  {current.foundAt === 'Local' && <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">LÖYTYI TÄÄLTÄ</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lookup Explanation */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 font-mono block">Resoluution tulos muuttujalle '{current.varName}':</span>
          <span className="text-sm font-mono font-bold text-python-yellow">
            Arvo: {current.val} ({current.foundAt} Scope)
          </span>
          <p className="text-xs text-slate-300 mt-1">{current.reason}</p>
        </div>
      </div>
    </div>
  );
};
