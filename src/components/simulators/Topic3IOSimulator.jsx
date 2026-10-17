import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sliders, Terminal, Play, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const Topic3IOSimulator = () => {
  const { lang } = useLanguage();
  
  // print() simulator state
  const [items, setItems] = useState(['Python', '3.12', 'DeveloperHub']);
  const [sep, setSep] = useState(' - ');
  const [end, setEnd] = useState('\\n');

  // input() + type casting state
  const [rawInput, setRawInput] = useState('2026');
  const [targetType, setTargetType] = useState('int');
  const [castResult, setCastResult] = useState(null);

  const handleCast = () => {
    if (targetType === 'str') {
      setCastResult({
        success: true,
        val: `"${rawInput}"`,
        type: 'str',
        msg: lang === 'fi' ? 'Merkkijono säilyy sellaisenaan.' : 'String preserved as-is.'
      });
    } else if (targetType === 'int') {
      const parsed = parseInt(rawInput, 10);
      if (isNaN(parsed) || !/^-?\d+$/.test(rawInput.trim())) {
        setCastResult({
          success: false,
          error: `ValueError: invalid literal for int() with base 10: '${rawInput}'`
        });
      } else {
        setCastResult({
          success: true,
          val: parsed,
          type: 'int',
          msg: lang === 'fi' ? 'Muunnos kokonaisluvuksi onnistui!' : 'Successfully converted to int!'
        });
      }
    } else if (targetType === 'float') {
      const parsed = parseFloat(rawInput);
      if (isNaN(parsed) || isNaN(Number(rawInput.trim()))) {
        setCastResult({
          success: false,
          error: `ValueError: could not convert string to float: '${rawInput}'`
        });
      } else {
        setCastResult({
          success: true,
          val: parsed.toFixed(2),
          type: 'float',
          msg: lang === 'fi' ? 'Muunnos liukuluvuksi onnistui!' : 'Successfully converted to float!'
        });
      }
    }
  };

  const simulatedPrintOutput = items.join(sep) + (end === '\\n' ? '\n' : end);

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-python-blue-light" />
          {lang === 'fi' ? 'Syöte- ja tulostelaboratorio (I/O)' : lang === 'ar' ? 'مختبر الإدخال والإخراج التفاعلي' : 'Input & Output Interactive Laboratory'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Kokeile print()-parametrien (sep, end) vaikutusta ja testaa input()-syötteen tyyppimuunnoksia reaaliajassa.'
            : lang === 'ar'
            ? 'جرّب معاملات print() واختبر تحويل أنواع مدخلات دالة input() في الوقت الفعلي.'
            : 'Experiment with print(sep, end) parameters and simulate input() type conversions interactively.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Print() experiment panel */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">1. print(*args, sep, end)</span>
            <span className="text-[10px] text-slate-400 font-mono">print() Engine</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-300 font-mono block mb-1">
                {lang === 'fi' ? 'Tulostettavat alkiot (pilkulla erotettuna):' : 'Items (comma-separated):'}
              </label>
              <input
                type="text"
                value={items.join(', ')}
                onChange={(e) => setItems(e.target.value.split(',').map(s => s.trim()))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-300 font-mono block mb-1">
                  sep= (Erotin):
                </label>
                <input
                  type="text"
                  value={sep}
                  onChange={(e) => setSep(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-mono block mb-1">
                  end= (Lopetus):
                </label>
                <input
                  type="text"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
                />
              </div>
            </div>

            {/* Code preview & terminal output */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 font-mono block mb-1">Python-kutsu:</span>
              <pre className="p-2 bg-slate-900 text-xs font-mono text-python-yellow-light rounded border border-slate-800">
                print({items.map(i => `"${i}"`).join(', ')}, sep="{sep}", end="{end}")
              </pre>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 font-mono block mb-1">Konsolin tulos:</span>
              <div className="p-3 bg-slate-900 rounded font-mono text-xs text-emerald-400 border border-slate-800 whitespace-pre">
                {simulatedPrintOutput}
              </div>
            </div>
          </div>
        </div>

        {/* input() and type conversion panel */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">2. input() & Type Conversion</span>
            <span className="text-[10px] text-slate-400 font-mono">int() / float()</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-300 font-mono block mb-1">
                {lang === 'fi' ? 'Simuloitu input()-syöte käyttäjältä:' : 'Simulated input() string from user:'}
              </label>
              <input
                type="text"
                value={rawInput}
                onChange={(e) => setRawInput(e.target.value)}
                placeholder="esim. 42 tai 3.14 tai teksti"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 font-mono block mb-1">
                {lang === 'fi' ? 'Muunna tyyppiin:' : 'Cast to type:'}
              </label>
              <div className="flex gap-2">
                {['str', 'int', 'float'].map(t => (
                  <button
                    key={t}
                    onClick={() => setTargetType(t)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      targetType === t
                        ? 'bg-python-blue text-white'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {t}()
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCast}
              className="w-full py-2 bg-gradient-to-r from-python-blue to-python-blue-light hover:brightness-110 text-white font-mono text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-glow-blue"
            >
              <Play className="w-3.5 h-3.5" />
              {lang === 'fi' ? `Suorita ${targetType}("${rawInput}")` : `Execute ${targetType}("${rawInput}")`}
            </button>

            {/* Cast Result Inspection */}
            {castResult && (
              <div className={`p-3 rounded-lg border font-mono text-xs space-y-1 ${
                castResult.success
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {castResult.success ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                  )}
                  {castResult.success ? 'Tyyppimuunnos Onnistui' : 'Poikkeus (Exception)'}
                </div>
                {castResult.success ? (
                  <>
                    <p className="text-slate-300">{castResult.msg}</p>
                    <p className="font-bold text-white pt-1">
                      Arvo: <span className="text-python-yellow">{castResult.val}</span> | Tyyppi: <span className="text-cyan-400">{castResult.type}</span>
                    </p>
                  </>
                ) : (
                  <p className="text-rose-400 font-bold">{castResult.error}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
