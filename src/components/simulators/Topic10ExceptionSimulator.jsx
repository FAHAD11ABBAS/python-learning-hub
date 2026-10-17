import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AlertTriangle, Play, CheckCircle2, ShieldCheck, ArrowDown } from 'lucide-react';

export const Topic10ExceptionSimulator = () => {
  const { lang } = useLanguage();
  const [testCase, setTestCase] = useState('valid'); // 'valid', 'zero_div', 'value_err', 'index_guard'

  const cases = {
    valid: {
      name: '1. Onnistunut suoritus (100 / 4)',
      inputA: '100',
      inputB: '4',
      path: ['try', 'else', 'finally'],
      tryResult: 'tulos = 25.0',
      exceptTriggered: null,
      elseExecuted: 'Suoritettu: "Jakolasku onnistui!"',
      finallyExecuted: 'Suoritettu: "Vapautetaan resurssit."'
    },
    zero_div: {
      name: '2. Nollalla jako (100 / 0)',
      inputA: '100',
      inputB: '0',
      path: ['try', 'except_zero', 'finally'],
      tryResult: 'ZeroDivisionError: division by zero',
      exceptTriggered: 'except ZeroDivisionError as e: Tulostetaan varoitus',
      elseExecuted: 'OHITETTU (Poikkeus tapahtui)',
      finallyExecuted: 'Suoritettu: "Vapautetaan resurssit."'
    },
    value_err: {
      name: '3. Tyyppimuunnosvirhe (float("abc"))',
      inputA: 'abc',
      inputB: '5',
      path: ['try', 'except_val', 'finally'],
      tryResult: "ValueError: could not convert string to float: 'abc'",
      exceptTriggered: 'except ValueError as e: Syöte ei ole luku',
      elseExecuted: 'OHITETTU (Poikkeus tapahtui)',
      finallyExecuted: 'Suoritettu: "Vapautetaan resurssit."'
    }
  };

  const current = cases[testCase] || cases.valid;

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-python-yellow" />
          {lang === 'fi' ? 'try-except-else-finally Elinkaarisimulaattori' : lang === 'ar' ? 'محاكي دورة حياة معالجة الاستثناءات' : 'try-except-else-finally Lifecycle Simulator'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Testaa poikkeustenkäsittelyn kulkua ja seuraa milloin else- ja finally-lohkot suoritetaan eri virhetilanteissa.'
            : lang === 'ar'
            ? 'اختبر مسارات معالجة الأخطاء وشاهد متى تنفذ كتل else و finally بدقة.'
            : 'Simulate exception lifecycles and observe when else vs finally blocks execute across varying fault conditions.'}
        </p>
      </div>

      {/* Test case buttons */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(cases).map(([k, c]) => (
          <button
            key={k}
            onClick={() => setTestCase(k)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              testCase === k
                ? 'bg-python-blue text-white shadow-glow-blue'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Visual Execution Pipeline Tree */}
      <div className="space-y-3 font-mono text-xs">
        {/* 1. TRY */}
        <div className="p-3 bg-slate-900 border border-python-blue-light/50 rounded-xl space-y-1">
          <div className="flex justify-between items-center text-python-blue-light font-bold">
            <span>1. try:</span>
            <span className="text-[10px] bg-python-blue/20 text-python-blue-light px-2 py-0.5 rounded">SUORITETAAN AINA</span>
          </div>
          <div className="text-slate-300 pl-4">
            a = float("{current.inputA}"); b = float("{current.inputB}"); tulos = a / b
          </div>
          <div className="text-emerald-400 pl-4 text-[11px]">
            &rarr; {current.tryResult}
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-slate-500" />
        </div>

        {/* 2. EXCEPT */}
        <div className={`p-3 rounded-xl border transition-all ${
          current.exceptTriggered
            ? 'bg-rose-950/30 border-rose-500/50 text-rose-300'
            : 'bg-slate-900/40 border-slate-800 text-slate-600 line-through'
        }`}>
          <div className="flex justify-between items-center font-bold mb-1">
            <span>2. except (ZeroDivisionError, ValueError):</span>
            <span className="text-[10px] uppercase">
              {current.exceptTriggered ? 'Laukesi!' : 'Ohitettu (Ei virhettä)'}
            </span>
          </div>
          <div className="pl-4 text-[11px]">
            {current.exceptTriggered || 'Virheenkäsittelyä ei tarvittu.'}
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-slate-500" />
        </div>

        {/* 3. ELSE */}
        <div className={`p-3 rounded-xl border transition-all ${
          current.path.includes('else')
            ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300'
            : 'bg-slate-900/40 border-slate-800 text-slate-600 line-through'
        }`}>
          <div className="flex justify-between items-center font-bold mb-1">
            <span>3. else:</span>
            <span className="text-[10px] uppercase">
              {current.path.includes('else') ? 'Suoritettu (Try onnistui)' : 'Ohitettu'}
            </span>
          </div>
          <div className="pl-4 text-[11px]">
            {current.elseExecuted}
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-slate-500" />
        </div>

        {/* 4. FINALLY */}
        <div className="p-3 bg-purple-950/20 border border-purple-500/50 rounded-xl text-purple-300 space-y-1">
          <div className="flex justify-between items-center font-bold">
            <span>4. finally:</span>
            <span className="text-[10px] bg-purple-500/20 px-2 py-0.5 rounded">SUORITETAAN AINA</span>
          </div>
          <div className="pl-4 text-[11px]">
            {current.finallyExecuted}
          </div>
        </div>
      </div>
    </div>
  );
};
