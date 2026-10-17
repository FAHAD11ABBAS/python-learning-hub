import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Boxes, ShieldCheck, ShieldAlert, Plus, Minus, Percent, Sparkles } from 'lucide-react';

export const Topic12OOPSimulator = () => {
  const { lang } = useLanguage();
  const [owner, setOwner] = useState('Matti Meikäläinen');
  const [balance, setBalance] = useState(1500.0);
  const [interestRate, setInterestRate] = useState(3.5);
  const [amount, setAmount] = useState(200);
  const [accessAttempt, setAccessAttempt] = useState('');
  const [log, setLog] = useState(['Olio tili = Saastotili("Matti Meikäläinen", 1500.0) alustettu muistiin.']);

  const deposit = () => {
    const num = parseFloat(amount);
    if (num > 0) {
      setBalance(prev => prev + num);
      setLog(prev => [`tili.talleta(${num}) -> Uusi saldo: ${(balance + num).toFixed(2)}€`, ...prev.slice(0, 4)]);
    }
  };

  const withdraw = () => {
    const num = parseFloat(amount);
    if (num > 0 && num <= balance) {
      setBalance(prev => prev - num);
      setLog(prev => [`tili.nosta(${num}) -> Uusi saldo: ${(balance - num).toFixed(2)}€`, ...prev.slice(0, 4)]);
    } else {
      setLog(prev => [`[Virhe] tili.nosta(${num}) epäonnistui: Kate ei riitä!`, ...prev.slice(0, 4)]);
    }
  };

  const payInterest = () => {
    const interest = balance * (interestRate / 100);
    setBalance(prev => prev + interest);
    setLog(prev => [`tili.maksa_korko() -> Korkoa lisätty ${interest.toFixed(2)}€ (+${interestRate}%)`, ...prev.slice(0, 4)]);
  };

  const testPrivateAccess = () => {
    setAccessAttempt("AttributeError: 'Saastotili' object has no attribute '__saldo'");
  };

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Boxes className="w-5 h-5 text-python-yellow" />
          {lang === 'fi' ? 'Olio-ohjelmoinnin & kapseloinnin simulaattori' : lang === 'ar' ? 'محاكي البرمجة كائنية التوجه والتغليف والتوريث' : 'OOP Hierarchy & Encapsulation Simulator'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Testaa luokan ilmentymää (olio), periytymistä Saastotili(Pankkitili) ja tarkastele miten yksityiset attribuutit (__saldo) suojataan.'
            : lang === 'ar'
            ? 'اختبر وراثة الفئات والتغليف وشاهد كيف تمنع بايثون الوصول المباشر للخصائص الخاصة.'
            : 'Simulate class instantiation, method calls, inheritance, and inspect private name mangling protections.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Object State Card */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">
              Olio: tili (Luokka: Saastotili &rarr; Pankkitili)
            </span>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
              Instance active
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Public attribute */}
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-slate-400">tili.omistaja (Julkinen):</span>
                <span className="text-white font-bold ml-2">"{owner}"</span>
              </div>
              <span className="text-[10px] text-cyan-400 uppercase font-bold">Public</span>
            </div>

            {/* Private attribute with name mangling */}
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">tili.__saldo (Yksityinen):</span>
                <span className="text-[10px] text-amber-400 uppercase font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Private
                </span>
              </div>
              <div className="flex justify-between items-center pt-1 text-[11px]">
                <span className="text-slate-500 font-mono">Sisäinen Name Mangling -nimi:</span>
                <span className="text-python-blue-light font-bold">_Pankkitili__saldo</span>
              </div>
              <div className="text-emerald-400 font-bold pt-1">
                Turvallinen getter tili.get_saldo(): {balance.toFixed(2)}€
              </div>
            </div>

            {/* Subclass attribute */}
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-slate-400">tili.korkoprosentti (Peritty luokka):</span>
                <span className="text-python-yellow font-bold ml-2">{interestRate}%</span>
              </div>
              <span className="text-[10px] text-purple-400 uppercase font-bold">Subclass</span>
            </div>
          </div>
        </div>

        {/* Method Operations & Name Mangling test */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">
              Metodien kutsuminen
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Methods</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-300 font-mono block mb-1">
                Summa (€):
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={deposit}
                className="py-2 bg-emerald-600/80 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-all"
              >
                <Plus className="w-3.5 h-3.5" /> .talleta()
              </button>
              <button
                onClick={withdraw}
                className="py-2 bg-rose-600/80 hover:bg-rose-500 text-white font-mono text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-all"
              >
                <Minus className="w-3.5 h-3.5" /> .nosta()
              </button>
              <button
                onClick={payInterest}
                className="py-2 bg-python-blue hover:bg-python-blue-light text-white font-mono text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-all shadow-glow-blue"
              >
                <Percent className="w-3.5 h-3.5" /> .maksa_korko()
              </button>
            </div>

            {/* Test direct private access */}
            <div className="pt-2">
              <button
                onClick={testPrivateAccess}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-mono text-xs rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                Yritä suoraa pääsyä: print(tili.__saldo)
              </button>

              {accessAttempt && (
                <div className="mt-2 p-2.5 bg-rose-950/40 border border-rose-500/40 rounded-lg text-rose-300 text-xs font-mono">
                  {accessAttempt}
                </div>
              )}
            </div>

            {/* Operation logs */}
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-[11px] space-y-1">
              <span className="text-slate-500 block mb-1 font-bold">Tapahtumaloki:</span>
              {log.map((entry, i) => (
                <div key={i} className="text-slate-300">
                  &gt; {entry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
