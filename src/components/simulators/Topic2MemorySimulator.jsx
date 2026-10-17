import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Boxes, ArrowRight, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

export const Topic2MemorySimulator = () => {
  const { lang } = useLanguage();
  const [scenario, setScenario] = useState('rebind_int'); // 'rebind_int', 'mutate_list', 'shallow_copy', 'interning'

  const scenarios = {
    rebind_int: {
      title: lang === 'fi' ? 'Muuttumaton int: x = 10; y = x; y = 20' : lang === 'ar' ? 'نوع غير قابل للتعديل int: x = 10; y = x; y = 20' : 'Immutable int: x = 10; y = x; y = 20',
      description: lang === 'fi' 
        ? 'Koska int on muuttumaton (immutable), y:n uusi arvo 20 luo muistiin kokonaan uuden olion. x osoittaa edelleen vanhaan olioon 10.' 
        : lang === 'ar' 
        ? 'نظراً لأن الأرقام غير قابلة للتعديل، فإن تعيين قيمة 20 للمتغير y ينشئ كائناً جديداً في الذاكرة دون المساس بـ x.' 
        : 'Since integers are immutable, reassigning y to 20 binds y to a newly allocated integer object. x remains undisturbed.',
      vars: [
        { name: 'x', targetId: 'obj-10', targetVal: 10, type: 'int', mutable: false },
        { name: 'y', targetId: 'obj-20', targetVal: 20, type: 'int', mutable: false }
      ],
      objects: [
        { id: 'obj-10', memAddr: '0x104b901a0', val: '10', type: 'int', immutable: true, referencedBy: ['x'] },
        { id: 'obj-20', memAddr: '0x104b902e0', val: '20', type: 'int', immutable: true, referencedBy: ['y'] }
      ],
      equality: 'x == y is False',
      identity: 'x is y is False'
    },
    mutate_list: {
      title: lang === 'fi' ? 'Muuttuva lista: a = [1, 2]; b = a; b.append(3)' : lang === 'ar' ? 'قائمة قابلة للتعديل: a = [1, 2]; b = a; b.append(3)' : 'Mutable list: a = [1, 2]; b = a; b.append(3)',
      description: lang === 'fi'
        ? 'b = a kopioi vain muistiosoitteen viittauksen! Molemmat muuttujat osoittavat täsmälleen samaan listaan. b.append(3) muuttaa myös a:n sisällön!'
        : lang === 'ar'
        ? 'الإسناد b = a ينسخ مرجع الذاكرة فقط! يشير كلاهما للقائمة ذاتها، وتعديل أحدهما ينعكس فوراً على الآخر.'
        : 'Assignment b = a creates a shared reference to the same list instance. Modifying the list in-place alters what both a and b see.',
      vars: [
        { name: 'a', targetId: 'obj-list-1', targetVal: '[1, 2, 3]', type: 'list', mutable: true },
        { name: 'b', targetId: 'obj-list-1', targetVal: '[1, 2, 3]', type: 'list', mutable: true }
      ],
      objects: [
        { id: 'obj-list-1', memAddr: '0x107a488f0', val: '[1, 2, 3]', type: 'list', immutable: false, referencedBy: ['a', 'b'] }
      ],
      equality: 'a == b is True',
      identity: 'a is b is True'
    },
    shallow_copy: {
      title: lang === 'fi' ? 'Turvallinen kopio: a = [1, 2]; b = a.copy(); b.append(3)' : lang === 'ar' ? 'نسخ مستقل آمن: a = [1, 2]; b = a.copy(); b.append(3)' : 'Safe copy: a = [1, 2]; b = a.copy(); b.append(3)',
      description: lang === 'fi'
        ? 'a.copy() varaa uuden muistipaikan uudelle listalle. Nyt b:n muokkaus ei vaikuta a:han lainkaan.'
        : lang === 'ar'
        ? 'تنشئ a.copy() نسخة جديدة تماماً في موقع ذاكرة منفصل، لذا لا يتأثر a إطلاقاً بتعديلات b.'
        : 'Invoking a.copy() allocates a distinct list in memory. Mutating b leaves a unaltered.',
      vars: [
        { name: 'a', targetId: 'obj-list-orig', targetVal: '[1, 2]', type: 'list', mutable: true },
        { name: 'b', targetId: 'obj-list-copy', targetVal: '[1, 2, 3]', type: 'list', mutable: true }
      ],
      objects: [
        { id: 'obj-list-orig', memAddr: '0x107a488f0', val: '[1, 2]', type: 'list', immutable: false, referencedBy: ['a'] },
        { id: 'obj-list-copy', memAddr: '0x107a499a8', val: '[1, 2, 3]', type: 'list', immutable: false, referencedBy: ['b'] }
      ],
      equality: 'a == b is False',
      identity: 'a is b is False'
    },
    interning: {
      title: lang === 'fi' ? 'Pienten lukujen välimuisti: x = 100; y = 100' : lang === 'ar' ? 'ذاكرة الأرقام المسبقة: x = 100; y = 100' : 'Integer Interning: x = 100; y = 100',
      description: lang === 'fi'
        ? 'Python optimoi suorituskykyä luomalla pienet kokonaisluvut (-5..256) valmiiksi muistiin. x ja y jakavat saman id()-osoitteen automaattisesti!'
        : lang === 'ar'
        ? 'تحفظ بايثون الأرقام من -5 إلى 256 مسبقاً في الذاكرة لتسريع الأداء؛ يشترك x و y في نفس عنوان id() تلقائياً.'
        : 'CPython optimizes memory by pre-allocating small integers (-5 to 256). Both variables share the identical singleton object.',
      vars: [
        { name: 'x', targetId: 'obj-100', targetVal: 100, type: 'int', mutable: false },
        { name: 'y', targetId: 'obj-100', targetVal: 100, type: 'int', mutable: false }
      ],
      objects: [
        { id: 'obj-100', memAddr: '0x104b88220', val: '100', type: 'int', immutable: true, referencedBy: ['x', 'y'] }
      ],
      equality: 'x == y is True',
      identity: 'x is y is True (Shared Cached Singleton)'
    }
  };

  const current = scenarios[scenario];

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Boxes className="w-5 h-5 text-python-yellow" />
            {lang === 'fi' ? 'Muistimallin & id()-viittausten simulaattori' : lang === 'ar' ? 'محاكي مؤشرات الذاكرة ودالة id()' : 'Memory Model & Object Identity Simulator'}
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'fi'
              ? 'Tarkastele miten muuttujat toimivat viittauksina muistissa ja miten mutatoituvuus vaikuttaa.'
              : lang === 'ar'
              ? 'شاهد كيف تعمل المتغيرات كمؤشرات لكائنات الذاكرة وكيف تؤثر القابلية للتعديل.'
              : 'Visualize how Python variables act as names bound to memory objects and understand mutability.'}
          </p>
        </div>

        {/* Scenario selector */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(scenarios).map(([key, sc]) => (
            <button
              key={key}
              onClick={() => setScenario(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                scenario === key
                  ? 'bg-python-blue text-white shadow-glow-blue'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {key === 'rebind_int' ? '1. int (Rebind)' :
               key === 'mutate_list' ? '2. list (Mutable)' :
               key === 'shallow_copy' ? '3. copy() (Safe)' : '4. Interning (-5..256)'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
        <span className="text-xs font-mono font-bold text-python-yellow">{current.title}</span>
        <p className="text-xs text-slate-300">{current.description}</p>
      </div>

      {/* Visual Memory Graph: Names (Stack) -> Pointers -> Heap Objects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Names / Variables Column */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase text-slate-400 font-bold px-1">
            {lang === 'fi' ? 'Muuttujanimet (Symbolitaulu)' : lang === 'ar' ? 'أسماء المتغيرات (جدول الرموز)' : 'Variables (Stack Symbol Table)'}
          </div>
          <div className="space-y-3">
            {current.vars.map(v => (
              <div key={v.name} className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-python-blue/20 border border-python-blue/50 flex items-center justify-center font-mono font-bold text-python-yellow text-sm">
                    {v.name}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    refers to &rarr;
                  </span>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                  {v.targetId}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Memory Objects Column */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase text-slate-400 font-bold px-1">
            {lang === 'fi' ? 'Muistiobjektit (Keko / Heap)' : lang === 'ar' ? 'كائنات الذاكرة الحقيقية (Heap)' : 'Heap Memory Objects (id() address)'}
          </div>
          <div className="space-y-3">
            {current.objects.map(obj => (
              <div key={obj.id} className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    id(): {obj.memAddr}
                  </span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                    obj.immutable ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {obj.immutable ? 'Immutable' : 'Mutable'}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400">type: {obj.type}</span>
                  <span className="text-sm font-mono font-bold text-white bg-slate-950 px-3 py-1 rounded">
                    {obj.val}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equality vs Identity badge comparisons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Arvojen vertailu (==):</span>
          <span className="text-xs font-mono font-bold text-python-yellow">{current.equality}</span>
        </div>
        <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Muistiosoitteen vertailu (is):</span>
          <span className="text-xs font-mono font-bold text-cyan-400">{current.identity}</span>
        </div>
      </div>
    </div>
  );
};
