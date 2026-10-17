import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FileText, Lock, Unlock, Database, Eye, Plus, Trash2 } from 'lucide-react';

export const Topic7FileSimulator = () => {
  const { lang } = useLanguage();
  
  // Virtual files
  const [files, setFiles] = useState({
    'data.txt': {
      mode: 'text',
      content: 'Python Learning Hub\nVersion 3.12 Developer Guide\nStatus: Production Ready'
    },
    'access.log': {
      mode: 'text',
      content: '2026-10-17 12:00:00 [INFO] User login: student_01\n2026-10-17 12:04:12 [WARN] High memory usage'
    },
    'logo.png': {
      mode: 'binary',
      bytes: '89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 01 00',
      description: 'PNG Magic header: \\x89PNG\\r\\n\\x1a\\n'
    }
  });

  const [selectedFile, setSelectedFile] = useState('data.txt');
  const [accessMode, setAccessMode] = useState('r'); // 'r', 'w', 'a', 'rb'
  const [inputText, setInputText] = useState('Uusi lisätty rivi lokiin');
  const [contextState, setContextState] = useState('closed'); // 'closed', 'open_reading', 'open_writing', 'auto_closed'
  const [statusMessage, setStatusMessage] = useState('');

  const currentFile = files[selectedFile];

  const executeWithOpen = () => {
    if (accessMode === 'r') {
      setContextState('open_reading');
      setStatusMessage(lang === 'fi' ? 'Tiedosto avattu lukutilassa with-lohkoon.' : 'File opened in read mode within with-block.');
      setTimeout(() => {
        setContextState('auto_closed');
        setStatusMessage(lang === 'fi' ? 'Lohko päättyi -> Tiedosto suljettiin automaattisesti (f.closed == True)!' : 'Block ended -> File auto-closed (f.closed == True)!');
      }, 900);
    } else if (accessMode === 'w') {
      setContextState('open_writing');
      setFiles(prev => ({
        ...prev,
        [selectedFile]: { ...prev[selectedFile], content: inputText }
      }));
      setStatusMessage(lang === 'fi' ? `'w' ylikirjoitti koko tiedoston!` : `'w' mode truncated and overwrote file!`);
      setTimeout(() => {
        setContextState('auto_closed');
      }, 900);
    } else if (accessMode === 'a') {
      setContextState('open_writing');
      setFiles(prev => ({
        ...prev,
        [selectedFile]: { ...prev[selectedFile], content: prev[selectedFile].content + '\n' + inputText }
      }));
      setStatusMessage(lang === 'fi' ? `'a' lisäsi rivin tiedoston loppuun!` : `'a' mode appended line to EOF!`);
      setTimeout(() => {
        setContextState('auto_closed');
      }, 900);
    }
  };

  return (
    <div className="p-6 rounded-2xl glass-panel space-y-6">
      <div>
        <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileText className="w-5 h-5 text-python-blue-light" />
          {lang === 'fi' ? 'Virtuaalinen tiedostojärjestelmä & with-hallinta' : lang === 'ar' ? 'محاكي نظام الملفات ومدير السياق with' : 'Virtual File System & Context Manager Simulator'}
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          {lang === 'fi'
            ? 'Kokeile eri tiedostotiloja (r, w, a, rb), katsele binääritiedoston tavuja ja seuraa with-lohkon automaattista sulkemista.'
            : lang === 'ar'
            ? 'اختبر أوضاع الملفات المختلفة وشاهد تدفق البايتات الثنائية مع إغلاق الملف التلقائي عبر with.'
            : 'Explore file modes (r, w, a, rb), inspect binary raw bytes, and watch context manager auto-closure.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Virtual File Explorer */}
        <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
          <span className="text-xs font-mono font-bold text-python-yellow flex items-center gap-2">
            <Database className="w-4 h-4 text-python-blue-light" />
            Virtuaaliset tiedostot
          </span>
          <div className="space-y-2">
            {Object.entries(files).map(([name, f]) => (
              <button
                key={name}
                onClick={() => { setSelectedFile(name); setAccessMode(f.mode === 'binary' ? 'rb' : 'r'); }}
                className={`w-full p-2.5 rounded-lg border text-left font-mono text-xs flex items-center justify-between transition-all ${
                  selectedFile === name
                    ? 'bg-python-blue/20 border-python-blue text-white shadow-glow-blue'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{name}</span>
                <span className="text-[10px] uppercase font-bold text-slate-500">
                  {f.mode}
                </span>
              </button>
            ))}
          </div>

          {/* Context manager lifecycle badge */}
          <div className="pt-3 border-t border-slate-800">
            <div className="flex items-center justify-between font-mono text-xs mb-1">
              <span className="text-slate-400">f.closed:</span>
              <span className={`font-bold flex items-center gap-1 ${
                contextState === 'open_reading' || contextState === 'open_writing'
                  ? 'text-amber-400'
                  : 'text-emerald-400'
              }`}>
                {contextState === 'open_reading' || contextState === 'open_writing' ? (
                  <><Unlock className="w-3.5 h-3.5" /> False (Auki)</>
                ) : (
                  <><Lock className="w-3.5 h-3.5" /> True (Turvallisesti suljettu)</>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Operation Controls & Code Preview */}
        <div className="lg:col-span-2 p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-python-yellow">
              with open("{selectedFile}", "{accessMode}") as f:
            </span>
            <div className="flex gap-1.5">
              {['r', 'w', 'a', 'rb'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setAccessMode(mode)}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                    accessMode === mode
                      ? 'bg-python-blue text-white'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  '{mode}'
                </button>
              ))}
            </div>
          </div>

          {(accessMode === 'w' || accessMode === 'a') && (
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-300">
                {lang === 'fi' ? 'Kirjoitettava teksti f.write(...):' : 'Write content:'}
              </label>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-python-blue"
              />
            </div>
          )}

          <button
            onClick={executeWithOpen}
            className="w-full py-2 bg-gradient-to-r from-python-blue to-python-blue-light hover:brightness-110 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-glow-blue flex items-center justify-center gap-2"
          >
            <Eye className="w-3.5 h-3.5" />
            {lang === 'fi' ? 'Suorita with-lohko' : 'Execute with-block'}
          </button>

          {/* Current File Content Viewer */}
          <div>
            <span className="text-[11px] font-mono text-slate-400 block mb-1">
              {currentFile.mode === 'binary' ? 'Binääritavut (Hex Stream Viewer):' : 'Tiedoston nykyinen sisältö:'}
            </span>
            {currentFile.mode === 'binary' ? (
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs space-y-2">
                <div className="text-cyan-400 tracking-wider">
                  {currentFile.bytes}
                </div>
                <div className="text-[11px] text-slate-400">
                  {currentFile.description}
                </div>
              </div>
            ) : (
              <pre className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 whitespace-pre max-h-40 overflow-y-auto">
                {currentFile.content}
              </pre>
            )}
          </div>

          {statusMessage && (
            <p className="text-xs font-mono text-python-yellow">
              &gt; {statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
