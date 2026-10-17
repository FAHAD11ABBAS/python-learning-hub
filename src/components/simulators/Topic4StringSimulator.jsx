import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Type, Play, Sparkles, RefreshCw } from 'lucide-react';

export const Topic4StringSimulator = () => {
  const { lang } = useLanguage();
  const [text, setText] = useState('PythonHub');
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(9);
  const [step, setStep] = useState(1);
  const [activeMethod, setActiveMethod] = useState('slice'); // 'slice', 'upper', 'lower', 'reverse', 'replace'
  const [replaceArg, setReplaceArg] = useState({ old: 'o', new: '0' });

  const chars = text.split('');
  const textLength = text.length;

  // Calculate sliced indices safely
  const calculateSlicedIndices = () => {
    const indices = [];
    const stepVal = step === 0 ? 1 : step;
    
    if (stepVal > 0) {
      let s = start < 0 ? Math.max(0, textLength + start) : Math.min(start, textLength);
      let e = stop < 0 ? Math.max(0, textLength + stop) : Math.min(stop, textLength);
      for (let i = s; i < e; i += stepVal) {
        indices.push(i);
      }
    } else {
      let s = start === undefined ? textLength - 1 : (start < 0 ? textLength + start : Math.min(start, textLength - 1));
      let e = stop === undefined ? -1 : (stop < 0 ? textLength + stop : stop);
      for (let i = s; i > e; i += stepVal) {
        indices.push(i);
      }
    }
    return indices;
  };

  const slicedIndices = calculateSlicedIndices();
  const slicedResult = slicedIndices.map(i => chars[i]).join('');

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Type className="w-5 h-5 text-python-yellow" />
          {lang === 'fi' ? 'Merkkijonojen viipalointi- ja metodisimulaattori' : lang === 'ar' ? 'محاكي تشريح ومعالجة النصوص' : 'String Slicing & Methods Visualizer'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Tarkastele positiivisia ja negatiivisia indeksejä, viipaloi [start:stop:step] -syntaksilla ja testaa metodeja.'
            : lang === 'ar'
            ? 'شاهد الفهارس الموجبة والسالبة، وجرب التشريح بصيغة [start:stop:step] والوظائف المدمجة.'
            : 'Inspect positive/negative index rulers, slice interactively with [start:stop:step], and test string methods.'}
        </p>
      </div>

      {/* Input string */}
      <div className="flex items-center gap-3">
        <label className="text-xs font-mono text-slate-300">
          {lang === 'fi' ? 'Merkkijono s:' : 'String s:'}
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setStop(e.target.value.length);
          }}
          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
        />
        <button
          onClick={() => { setText('PythonHub'); setStart(0); setStop(9); setStep(1); }}
          className="px-3 py-1.5 bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-mono rounded-lg flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Visual Character Index Ruler */}
      <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl overflow-x-auto space-y-2">
        <span className="text-[11px] font-mono text-slate-400 block mb-2 font-bold">
          {lang === 'fi' ? 'Indeksiviivain (Positiiviset 0..N ja Negatiiviset -N..-1):' : 'Index Ruler:'}
        </span>
        <div className="inline-flex gap-1.5 min-w-full pb-2">
          {chars.map((char, idx) => {
            const isSliced = slicedIndices.includes(idx);
            const negIdx = idx - textLength;

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Positive index */}
                <span className="text-[10px] font-mono text-cyan-400 font-semibold mb-1">
                  +{idx}
                </span>

                {/* Character box */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-base transition-all border ${
                  isSliced
                    ? 'bg-python-blue text-python-yellow border-python-yellow shadow-glow-yellow scale-105'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}>
                  {char}
                </div>

                {/* Negative index */}
                <span className="text-[10px] font-mono text-rose-400 font-semibold mt-1">
                  {negIdx}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slicing Controls: start, stop, step */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
          <div className="flex justify-between text-xs font-mono text-slate-300">
            <span>start:</span>
            <span className="text-python-yellow font-bold">{start}</span>
          </div>
          <input
            type="range"
            min={-textLength}
            max={textLength}
            value={start}
            onChange={(e) => setStart(parseInt(e.target.value, 10))}
            className="w-full accent-python-yellow cursor-pointer"
          />
        </div>

        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
          <div className="flex justify-between text-xs font-mono text-slate-300">
            <span>stop (exclusive):</span>
            <span className="text-cyan-400 font-bold">{stop}</span>
          </div>
          <input
            type="range"
            min={-textLength}
            max={textLength}
            value={stop}
            onChange={(e) => setStop(parseInt(e.target.value, 10))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>

        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
          <div className="flex justify-between text-xs font-mono text-slate-300">
            <span>step:</span>
            <span className="text-emerald-400 font-bold">{step}</span>
          </div>
          <input
            type="range"
            min={-3}
            max={3}
            value={step}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              setStep(val === 0 ? (step > 0 ? -1 : 1) : val);
            }}
            className="w-full accent-emerald-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Live Slice Evaluation & Quick Presets */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-slate-400 block">Python-lauseke:</span>
          <span className="text-sm font-mono font-bold text-python-yellow">
            s[{start}:{stop}:{step}] &rarr; <span className="text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800">"{slicedResult}"</span>
          </span>
        </div>

        {/* Quick presets */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setStart(0); setStop(textLength); setStep(1); }}
            className="px-2.5 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
          >
            s[:] (Kopio)
          </button>
          <button
            onClick={() => { setStart(0); setStop(5); setStep(1); }}
            className="px-2.5 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
          >
            s[:5] (Alku)
          </button>
          <button
            onClick={() => { setStart(0); setStop(textLength); setStep(2); }}
            className="px-2.5 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
          >
            s[::2] (Joka toinen)
          </button>
          <button
            onClick={() => { setStart(textLength - 1); setStop(-textLength - 1); setStep(-1); }}
            className="px-2.5 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
          >
            s[::-1] (Takaperin)
          </button>
        </div>
      </div>
    </div>
  );
};
