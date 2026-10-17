import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Layers, Plus, Trash2, ShieldAlert, Check, RefreshCw } from 'lucide-react';

export const Topic11DataStructuresSimulator = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('list'); // 'list', 'dict', 'tuple', 'set'

  // List state
  const [myList, setMyList] = useState(['Python', 'TypeScript', 'SQL']);
  const [newListItem, setNewListItem] = useState('');

  // Dict state
  const [myDict, setMyDict] = useState({ id: 101, nimi: 'PythonHub', kurssi: 'Python' });
  const [dictKey, setDictKey] = useState('');
  const [dictVal, setDictVal] = useState('');
  const [lookupKey, setLookupKey] = useState('nimi');

  // Tuple state
  const myTuple = [60.1699, 24.9384, 'Helsinki'];
  const [tupleError, setTupleError] = useState('');

  // Set state
  const setA = new Set(['Python', 'Git', 'Docker', 'Linux']);
  const setB = new Set(['Python', 'JavaScript', 'React', 'Docker']);
  const [setOp, setSetOp] = useState('intersection'); // 'intersection', 'union', 'diff_a'

  const computeSetResult = () => {
    if (setOp === 'intersection') {
      return [...setA].filter(x => setB.has(x));
    }
    if (setOp === 'union') {
      return [...new Set([...setA, ...setB])];
    }
    return [...setA].filter(x => !setB.has(x));
  };

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Layers className="w-5 h-5 text-python-yellow" />
          {lang === 'fi' ? 'Tietorakenteiden vertailulaboratorio' : lang === 'ar' ? 'مختبر مقارنة هياكل البيانات' : 'Data Structures Comparative Laboratory'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Kokeile listan, sanakirjan, monikon ja joukon operaatioita, mutatoituvuutta ja matematiikkaa käytännössä.'
            : lang === 'ar'
            ? 'جرّب عمليات القوائم والقواميس والصفوف والمجموعات، واختبر قابلية التعديل والعمليات الرياضية.'
            : 'Experiment with list mutations, dictionary hash lookups, tuple immutability, and set algebra.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800">
        {[
          { id: 'list', name: '1. List (Lista)' },
          { id: 'dict', name: '2. Dict (Sanakirja)' },
          { id: 'tuple', name: '3. Tuple (Monikko)' },
          { id: 'set', name: '4. Set (Joukko)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-xs font-mono font-bold transition-all border-b-2 ${
              activeTab === tab.id
                ? 'border-python-blue text-python-yellow bg-python-blue/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* TAB 1: LIST */}
      {activeTab === 'list' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-300">
              Järjestetty, muuttuva kokoelma:
            </span>
            <span className="text-xs font-mono text-emerald-400">
              len(lista) = {myList.length}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 p-3 bg-slate-950/70 border border-slate-800 rounded-xl">
            {myList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg font-mono text-xs text-white">
                <span className="text-slate-500 font-bold">{idx}:</span>
                <span>"{item}"</span>
                <button
                  onClick={() => setMyList(prev => prev.filter((_, i) => i !== idx))}
                  className="text-rose-400 hover:text-rose-300 ml-1"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Uusi alkio lista.append(...)"
              value={newListItem}
              onChange={(e) => setNewListItem(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
            />
            <button
              onClick={() => {
                if (newListItem.trim()) {
                  setMyList(prev => [...prev, newListItem.trim()]);
                  setNewListItem('');
                }
              }}
              className="px-4 py-1.5 bg-python-blue hover:bg-python-blue-light text-white text-xs font-mono font-bold rounded-lg"
            >
              .append()
            </button>
            <button
              onClick={() => setMyList(prev => [...prev].sort())}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded-lg"
            >
              .sort()
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: DICT */}
      {activeTab === 'dict' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-300">
              Avain-arvoparit (O(1) haku avaimella):
            </span>
            <span className="text-xs font-mono text-cyan-400">
              len(dict) = {Object.keys(myDict).length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-950/70 border border-slate-800 rounded-xl">
            {Object.entries(myDict).map(([k, v]) => (
              <div key={k} className="p-2.5 bg-slate-900 border border-slate-700 rounded-lg font-mono text-xs flex justify-between items-center">
                <div>
                  <span className="text-python-yellow font-bold">"{k}":</span>
                  <span className="text-emerald-400 ml-2">"{v}"</span>
                </div>
                <button
                  onClick={() => {
                    const copy = { ...myDict };
                    delete copy[k];
                    setMyDict(copy);
                  }}
                  className="text-rose-400 hover:text-rose-300"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Safe get() method tester */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between font-mono text-xs">
            <div>
              <span className="text-slate-400">dict.get("{lookupKey}", "Ei löydy"):</span>
              <span className="text-python-yellow font-bold ml-2">
                &rarr; {myDict[lookupKey] ? `"${myDict[lookupKey]}"` : '"Ei löydy"'}
              </span>
            </div>
            <input
              type="text"
              value={lookupKey}
              onChange={(e) => setLookupKey(e.target.value)}
              placeholder="Testaa avainta"
              className="bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white"
            />
          </div>
        </div>
      )}

      {/* TAB 3: TUPLE */}
      {activeTab === 'tuple' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-mono text-amber-400 font-bold block">
              Monikko: koordinaatit = (60.1699, 24.9384, 'Helsinki')
            </span>
            <p className="text-xs text-slate-300">
              Monikot ovat muuttumattomia (immutable). Kun monikko on luotu, sen alkioita ei voi lisätä, poistaa tai korvata.
            </p>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Yritetään sijoittaa: koordinaatit[0] = 99.99</span>
              <button
                onClick={() => setTupleError("TypeError: 'tuple' object does not support item assignment")}
                className="px-3 py-1 bg-rose-600/80 hover:bg-rose-500 text-white rounded font-bold"
              >
                Kokeile muuttaa
              </button>
            </div>

            {tupleError && (
              <div className="p-3 bg-rose-950/40 border border-rose-500/50 text-rose-300 rounded-lg flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>{tupleError}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: SET */}
      {activeTab === 'set' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl">
              <span className="text-python-blue-light font-bold block mb-1">Joukko A (Kurssi 1):</span>
              <div className="text-slate-300">{`{${[...setA].join(', ')}}`}</div>
            </div>
            <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl">
              <span className="text-python-yellow font-bold block mb-1">Joukko B (Kurssi 2):</span>
              <div className="text-slate-300">{`{${[...setB].join(', ')}}`}</div>
            </div>
          </div>

          {/* Operation picker */}
          <div className="flex gap-2">
            {[
              { id: 'intersection', label: 'Leikkaus (A & B)' },
              { id: 'union', label: 'Yhdiste (A | B)' },
              { id: 'diff_a', label: 'Vain A:ssa (A - B)' }
            ].map(op => (
              <button
                key={op.id}
                onClick={() => setSetOp(op.id)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  setOp === op.id
                    ? 'bg-python-blue text-white shadow-glow-blue'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {op.label}
              </button>
            ))}
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs">
            <span className="text-slate-400 block mb-1">Matemaattinen tulos:</span>
            <span className="text-emerald-400 font-bold text-sm">
              {`{${computeSetResult().map(x => `"${x}"`).join(', ')}}`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
