import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Package, Terminal, Play, Layers, CheckCircle } from 'lucide-react';

export const Topic9ModuleSimulator = () => {
  const { lang } = useLanguage();
  const [executionMode, setExecutionMode] = useState('direct'); // 'direct' or 'imported'
  const [importStyle, setImportStyle] = useState('namespace'); // 'namespace', 'specific', 'alias'

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Package className="w-5 h-5 text-python-blue-light" />
          {lang === 'fi' ? 'Moduulien, nimiavaruuksien ja __name__ -suojauksen simulaattori' : lang === 'ar' ? 'محاكي الوحدات والحزم وشرط __name__' : 'Modules, Namespaces & __name__ Simulator'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Testaa miten eri import-syntaksit vaikuttavat nimiavaruuteen ja kokeile if __name__ == "__main__" -suojausta käytännössä.'
            : lang === 'ar'
            ? 'اكتشف كيف تؤثر جمل الاستيراد على فضاء الأسماء وجرب شرط حماية التشغيل __name__ عملياً.'
            : 'Explore import syntax namespace bindings and inspect the __name__ == "__main__" execution guard.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Module Entry Guard __name__ == '__main__' */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">
              1. if __name__ == '__main__': Suojaus
            </span>
            <span className="text-xs font-mono text-cyan-400">
              __name__ = "{executionMode === 'direct' ? '__main__' : 'matikka_apuri'}"
            </span>
          </div>

          <div className="space-y-3">
            <label className="text-xs text-slate-300 font-mono block">
              {lang === 'fi' ? 'Valitse miten tiedostoa ajetaan:' : 'Select how script is executed:'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setExecutionMode('direct')}
                className={`py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all border ${
                  executionMode === 'direct'
                    ? 'bg-python-blue text-white border-python-blue-light shadow-glow-blue'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                Suora ajo ($ python apuri.py)
              </button>
              <button
                onClick={() => setExecutionMode('imported')}
                className={`py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all border ${
                  executionMode === 'imported'
                    ? 'bg-python-blue text-white border-python-blue-light shadow-glow-blue'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                Tuotu toiseen tiedostoon (import)
              </button>
            </div>

            {/* Code Box */}
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg font-mono text-xs space-y-1">
              <div className="text-slate-400">def laske_keskiarvo(luvut):</div>
              <div className="text-slate-400 pl-4">return sum(luvut) / len(luvut)</div>
              <div className="pt-2 text-python-yellow font-bold">if __name__ == '__main__':</div>
              <div className={`pl-4 transition-all ${
                executionMode === 'direct' ? 'text-emerald-400 font-bold' : 'text-slate-600 line-through'
              }`}>
                print("Ajetaan moduulin omat yksikkötestit...")
              </div>
            </div>

            {/* Explanation card */}
            <div className={`p-3 rounded-lg border text-xs ${
              executionMode === 'direct'
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                : 'bg-amber-950/20 border-amber-500/40 text-amber-300'
            }`}>
              {executionMode === 'direct' ? (
                <p>
                  <strong>Suora suoritus:</strong> Python asetti automaattisesti <code className="bg-slate-900 px-1 py-0.5 rounded">__name__ = '__main__'</code>, joten testikoodi suoritettiin onnistuneesti!
                </p>
              ) : (
                <p>
                  <strong>Moduulituonti:</strong> Python asetti arvoksi <code className="bg-slate-900 px-1 py-0.5 rounded">__name__ = 'matikka_apuri'</code>. Testilohko ohitettiin, joten toinen ohjelma voi käyttää funktiota ilman ylimääräisiä tulosteita!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Import Patterns Explorer */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">
              2. Import-syntaksin vertailu
            </span>
            <span className="text-[10px] text-slate-400 font-mono">PEP 8</span>
          </div>

          <div className="space-y-3">
            <div className="flex gap-2">
              {[
                { id: 'namespace', label: 'import math' },
                { id: 'specific', label: 'from math import sqrt' },
                { id: 'alias', label: 'import math as m' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setImportStyle(opt.id)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    importStyle === opt.id
                      ? 'bg-python-blue text-python-yellow'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-2 font-mono text-xs">
              <div>
                <span className="text-slate-400 block mb-1">Miten funktiota kutsutaan koodissa:</span>
                <span className="text-emerald-400 font-bold bg-slate-950 px-2 py-1 rounded block border border-slate-800">
                  {importStyle === 'namespace' ? 'tulos = math.sqrt(16)' :
                   importStyle === 'specific' ? 'tulos = sqrt(16)' : 'tulos = m.sqrt(16)'}
                </span>
              </div>
              <p className="text-slate-300 font-sans text-xs pt-1">
                {importStyle === 'namespace'
                  ? 'Suositeltu tapa: pitää koodin selkeänä ja estää nimien sekoittumisen.'
                  : importStyle === 'specific'
                  ? 'Kätevä usein toistuville funktioille. Varo ylikirjoittamasta omia funktioita.'
                  : 'Alias-syntaksi on suosittu laajoissa kirjastoissa kuten numpy (np) ja pandas (pd).'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
