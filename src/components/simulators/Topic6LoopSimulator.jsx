import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Repeat, Play, StepForward, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

export const Topic6LoopSimulator = () => {
  const { lang } = useLanguage();
  const students = ['Aino', 'Mikko', 'Elena', 'Kari', 'Saara'];
  
  const [target, setTarget] = useState('Elena');
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [status, setStatus] = useState('idle'); // 'idle', 'running', 'found_break', 'not_found_else'
  const [logs, setLogs] = useState([]);

  const reset = () => {
    setCurrentIdx(-1);
    setStatus('idle');
    setLogs([]);
  };

  const step = () => {
    if (status === 'found_break' || status === 'not_found_else') {
      reset();
      return;
    }

    const nextIdx = currentIdx + 1;
    if (nextIdx < students.length) {
      setCurrentIdx(nextIdx);
      const student = students[nextIdx];
      
      if (student.toLowerCase() === target.toLowerCase()) {
        setStatus('found_break');
        setLogs(prev => [
          ...prev,
          `Iteraatio ${nextIdx}: '${student}' == '${target}' -> Osuma! Suoritetaan 'break'.`
        ]);
      } else {
        setStatus('running');
        setLogs(prev => [
          ...prev,
          `Iteraatio ${nextIdx}: '${student}' != '${target}' -> Jatketaan seuraavaan.`
        ]);
      }
    } else {
      // Finished without break -> loop-else triggers!
      setStatus('not_found_else');
      setLogs(prev => [
        ...prev,
        `Silmukka käyty loppuun ilman break-komentoa -> Suoritetaan loop 'else:' lohko!`
      ]);
    }
  };

  const runAll = () => {
    reset();
    let found = false;
    const newLogs = [];

    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      if (student.toLowerCase() === target.toLowerCase()) {
        newLogs.push(`Iteraatio ${i}: '${student}' == '${target}' -> Osuma! Suoritetaan 'break'.`);
        setCurrentIdx(i);
        setStatus('found_break');
        found = true;
        break;
      } else {
        newLogs.push(`Iteraatio ${i}: '${student}' != '${target}' -> Jatketaan.`);
      }
    }

    if (!found) {
      newLogs.push(`Silmukka käyty loppuun ilman break-komentoa -> Suoritetaan loop 'else:' lohko!`);
      setCurrentIdx(students.length);
      setStatus('not_found_else');
    }
    setLogs(newLogs);
  };

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Repeat className="w-5 h-5 text-python-yellow" />
          {lang === 'fi' ? 'Silmukan & Loop-Else -rakenteen simulaattori' : lang === 'ar' ? 'محاكي الحلقات وجملة loop-else التكرارية' : 'Loop & Loop-Else Execution Stepper'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Seuraa for-silmukan etenemistä askel askeleelta ja todista milloin Pythonin uniikki loop-else suoritetaan.'
            : lang === 'ar'
            ? 'تتبع حلقة for خطوة بخطوة واكتشف متى يتم تنفيذ جملة loop-else الفريدة في بايثون.'
            : 'Step through a for loop search algorithm and observe how Python loop-else triggers vs breaks.'}
        </p>
      </div>

      {/* Target input and control buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-950/70 border border-slate-800 rounded-xl">
        <div className="flex items-center gap-3">
          <label className="text-xs font-mono text-slate-300">
            {lang === 'fi' ? 'Etsittävä opiskelija:' : 'Search target:'}
          </label>
          <input
            type="text"
            value={target}
            onChange={(e) => { setTarget(e.target.value); reset(); }}
            placeholder="esim. Elena tai Ville"
            className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={step}
            className="px-3 py-1.5 bg-python-blue hover:bg-python-blue-light text-white text-xs font-mono font-bold rounded-lg flex items-center gap-1.5 transition-all shadow-glow-blue"
          >
            <StepForward className="w-3.5 h-3.5" />
            {lang === 'fi' ? 'Seuraava askel' : 'Step Next'}
          </button>
          <button
            onClick={runAll}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold rounded-lg flex items-center gap-1.5 transition-all"
          >
            <Play className="w-3.5 h-3.5" />
            {lang === 'fi' ? 'Aja koko silmukka' : 'Run Full'}
          </button>
          <button
            onClick={reset}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded-lg flex items-center gap-1.5 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Visual Sequence of student cards */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-slate-400 font-bold block">
          Iteroitava lista: opiskelijat = ["Aino", "Mikko", "Elena", "Kari", "Saara"]
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {students.map((student, idx) => {
            const isCurrent = currentIdx === idx;
            const isMatched = isCurrent && status === 'found_break';
            const isPast = currentIdx > idx;

            return (
              <div
                key={student}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isMatched
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-300 shadow-lg scale-105'
                    : isCurrent
                    ? 'bg-python-blue/30 border-python-yellow text-white scale-105 shadow-glow-yellow'
                    : isPast
                    ? 'bg-slate-900/40 border-slate-800 text-slate-500'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-400 mb-1">
                  i = {idx}
                </div>
                <div className="font-mono font-bold text-sm">
                  {student}
                </div>
                {isMatched && (
                  <span className="text-[10px] text-emerald-400 font-bold block mt-1">
                    break!
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Loop-Else clause visualization */}
      <div className={`p-4 rounded-xl border transition-all ${
        status === 'not_found_else'
          ? 'bg-amber-950/30 border-amber-400 text-amber-200'
          : status === 'found_break'
          ? 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
          : 'bg-slate-900/60 border-slate-800 text-slate-400'
      }`}>
        <div className="flex items-center justify-between font-mono text-xs font-bold mb-1">
          <span>else: (Loop-Else Clause)</span>
          {status === 'not_found_else' && (
            <span className="text-amber-400 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> SUORITETTU (Ei breakia)
            </span>
          )}
          {status === 'found_break' && (
            <span className="text-rose-400 flex items-center gap-1">
              <XCircle className="w-3.5 h-3.5" /> OHITETTU (break suoritettiin)
            </span>
          )}
        </div>
        <p className="text-xs">
          print(f"Opiskelijaa '{target}' ei löytynyt kurssilta.")
        </p>
      </div>

      {/* Step Logs */}
      {logs.length > 0 && (
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">
            Suoritusloki:
          </div>
          {logs.map((log, i) => (
            <div key={i} className="text-slate-300 flex items-center gap-2">
              <span className="text-python-blue-light">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
