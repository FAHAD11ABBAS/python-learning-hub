import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Cpu, Play, RefreshCw, Layers, ArrowRight } from 'lucide-react';

export const Topic1ArchSimulator = () => {
  const { lang } = useLanguage();
  const [model, setModel] = useState('python'); // 'python' or 'compiled'
  const [activeStep, setActiveStep] = useState(0);

  const pythonSteps = [
    {
      title: lang === 'fi' ? '1. Lähdekoodi (.py)' : lang === 'ar' ? '١. الكود المصدري (.py)' : '1. Source Code (.py)',
      desc: lang === 'fi' ? 'Ihmisen luettavissa oleva koodi: def summa(a, b): return a + b' : lang === 'ar' ? 'كود عالي المستوى يسهل على المبرمج قراءته' : 'High-level human readable code written in Python',
      detail: 'sum = x + y'
    },
    {
      title: lang === 'fi' ? '2. CPython-kääntäjä' : lang === 'ar' ? '٢. مترجم CPython الداخلي' : '2. CPython Parser & Compiler',
      desc: lang === 'fi' ? 'Muuntaa koodin jäsentimen ja AST:n kautta tavukoodiksi' : lang === 'ar' ? 'تحليل الكود وبناء شجرة الإعراب المجردة AST' : 'Parses AST and emits stack-based bytecode instructions',
      detail: 'AST: BinOp(Add)'
    },
    {
      title: lang === 'fi' ? '3. Tavukoodi (.pyc)' : lang === 'ar' ? '٣. ملف البايت كود (.pyc)' : '3. Bytecode (.pyc)',
      desc: lang === 'fi' ? 'Alustariippumaton välimuoto CPythonille' : lang === 'ar' ? 'تعليمات وسيطة موحدة تعمل على كل الأنظمة' : 'Platform-independent virtual machine instructions',
      detail: 'LOAD_NAME x\nLOAD_NAME y\nBINARY_OP 0 (+)\nSTORE_NAME sum'
    },
    {
      title: lang === 'fi' ? '4. Python Virtual Machine (PVM)' : lang === 'ar' ? '٤. آلة بايثون الافتراضية (PVM)' : '4. Python Virtual Machine (PVM)',
      desc: lang === 'fi' ? 'Suorittaa tavukoodikäskyt käyttöjärjestelmän kautta reaaliajassa' : lang === 'ar' ? 'تفسير التعليمات وتنفيذها تعليمة تلو الأخرى' : 'Evaluates opcodes within evaluation loop on host OS',
      detail: 'CPU Execution -> Output: 42'
    }
  ];

  const compiledSteps = [
    {
      title: lang === 'fi' ? '1. Lähdekoodi (.cpp)' : lang === 'ar' ? '١. الكود المصدري (.cpp)' : '1. C++ Source (.cpp)',
      desc: lang === 'fi' ? 'Käännettävä lähdekoodi: int sum = x + y;' : lang === 'ar' ? 'كود C++ المصدري عالي المستوى' : 'Native high-level C++ source code',
      detail: 'int total = a + b;'
    },
    {
      title: lang === 'fi' ? '2. Esikääntäjä & Kääntäjä (GCC/Clang)' : lang === 'ar' ? '٢. المترجم الكلي (GCC/Clang)' : '2. Preprocessor & Compiler',
      desc: lang === 'fi' ? 'Kääntää koodin suoraan kohdelaitteen assembler-kieleksi' : lang === 'ar' ? 'تحويل الكود إلى لغة التجميع الخاصة بالمعالج' : 'Compiles C++ AST directly into target CPU assembly',
      detail: 'x86_64 Assembly: add eax, edx'
    },
    {
      title: lang === 'fi' ? '3. Linkkeri (Linker)' : lang === 'ar' ? '٣. الرابط البرمجي (Linker)' : '3. Linker',
      desc: lang === 'fi' ? 'Yhdistää objektitiedostot ja standardikirjastot yhteen' : lang === 'ar' ? 'ربط كائنات الكود مع مكتبات النظام الخارجية' : 'Resolves symbols and statically/dynamically links libs',
      detail: 'Linking stdlibc++.so'
    },
    {
      title: lang === 'fi' ? '4. Alkuperäinen konekieli (Binary)' : lang === 'ar' ? '٤. لغة الآلة الثنائية (Binary)' : '4. Native Machine Binary (ELF/Mach-O)',
      desc: lang === 'fi' ? 'Käyttöjärjestelmä lataa binaarin suoraan suorittimelle' : lang === 'ar' ? 'تشغيل فوري مباشر على معالج الحاسوب' : 'Direct execution by CPU registers with zero runtime VM',
      detail: '01001000 10001001 ...'
    }
  ];

  const steps = model === 'python' ? pythonSteps : compiledSteps;

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-python-blue-light" />
            {lang === 'fi' ? 'Suoritusmallin simulaattori' : lang === 'ar' ? 'محاكي معمارية التشغيل' : 'Execution Model Architecture Simulator'}
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'fi'
              ? 'Tarkastele vaihe vaiheelta miten Pythonin tavukoodi ja virtuaalikone (PVM) toimivat verrattuna C++-kieleen.'
              : lang === 'ar'
              ? 'شاهد خطوة بخطوة كيف يتم تحويل بايثون إلى بايت كود مقارنة بلغات التجميع الكاملة.'
              : 'Inspect step-by-step how Python bytecode and the PVM operate compared to native compiled C++.'}
          </p>
        </div>

        {/* Model switcher */}
        <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
          <button
            onClick={() => { setModel('python'); setActiveStep(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              model === 'python'
                ? 'bg-python-blue text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Python (CPython / Bytecode)
          </button>
          <button
            onClick={() => { setModel('compiled'); setActiveStep(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              model === 'compiled'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            C++ / Rust (AOT Compiled)
          </button>
        </div>
      </div>

      {/* Step pipeline cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          const isPast = activeStep > idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-4 rounded-xl border transition-all ${
                isSelected
                  ? model === 'python'
                    ? 'border-python-blue bg-python-blue/15 shadow-glow-blue'
                    : 'border-amber-500 bg-amber-500/15'
                  : isPast
                  ? 'border-emerald-500/50 bg-emerald-950/20'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  isSelected ? (model === 'python' ? 'text-python-yellow' : 'text-amber-400') : 'text-slate-400'
                }`}>
                  {step.title}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                )}
              </div>
              <p className="text-xs text-slate-300 line-clamp-2">{step.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Active step inspection inspector */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
          <span className="text-xs font-mono text-python-yellow flex items-center gap-2">
            <Layers className="w-4 h-4 text-python-blue-light" />
            {steps[activeStep].title}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : 0))}
              disabled={activeStep === 0}
              className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 disabled:opacity-40"
            >
              &larr;
            </button>
            <button
              onClick={() => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : prev))}
              disabled={activeStep === steps.length - 1}
              className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 disabled:opacity-40"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-slate-300">{steps[activeStep].desc}</p>
          <pre className="p-3 bg-slate-900 rounded-lg font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre">
            {steps[activeStep].detail}
          </pre>
        </div>
      </div>
    </div>
  );
};
