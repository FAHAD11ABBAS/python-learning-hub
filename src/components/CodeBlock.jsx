import React, { useState } from 'react';
import { Copy, Check, Terminal, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { playClickSound } from '../utils/audio';

export const CodeBlock = ({ code, filename = 'script.py', onRunInPlayground }) => {
  const { lang } = useLanguage();
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fi;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    playClickSound();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-2xl overflow-hidden border border-navy-border bg-navy-dark font-mono text-xs shadow-hyper-card my-4">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-card border-b border-navy-border text-slate-300">
        <div className="flex items-center gap-2">
          {/* Hyper-car style status indicators */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson inline-block shadow-glow-crimson" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block shadow-glow-gold" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
          </div>
          <span className="text-xs text-slate-400 font-semibold">{filename}</span>
        </div>

        <div className="flex items-center gap-2">
          {onRunInPlayground && (
            <button
              onClick={() => {
                playClickSound();
                onRunInPlayground(code);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-crimson/20 text-gold hover:bg-crimson/30 border border-crimson/40 transition-all text-xs font-semibold"
              title={t.runCode}
            >
              <Play className="w-3 h-3 text-gold fill-gold" />
              <span>{t.runCode}</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy hover:bg-slate-800 text-slate-300 transition-all text-xs border border-navy-border"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">{t.codeCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-400" />
                <span>{t.copyCode}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content with Line Numbers */}
      <div className="p-4 overflow-x-auto text-[13px] leading-relaxed">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-navy-card/50 transition-colors">
                <td className="pr-4 py-0.5 text-right select-none text-slate-600 font-mono text-xs w-8">
                  {idx + 1}
                </td>
                <td className="py-0.5 whitespace-pre font-mono">
                  {highlightPython(line)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Client-side python syntax highlight helper
function highlightPython(line) {
  if (line.trim().startsWith('#')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  const keywordRegex = /\b(def|class|if|elif|else|for|while|in|is|not|and|or|return|import|from|as|try|except|finally|raise|with|pass|break|continue|nonlocal|global)\b/g;
  const builtinRegex = /\b(print|input|len|range|int|float|str|bool|list|dict|tuple|set|type|id|sum|min|max|round|open|super|isinstance)\b/g;

  const parts = line.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b\w+\b|[^\w\s"']+)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;

        if (part.startsWith('"') || part.startsWith("'")) {
          return <span key={i} className="text-gold">{part}</span>;
        }
        if (/^\d+(\.\d+)?$/.test(part)) {
          return <span key={i} className="text-emerald-400">{part}</span>;
        }
        if (keywordRegex.test(part)) {
          return <span key={i} className="text-crimson-light font-bold">{part}</span>;
        }
        if (builtinRegex.test(part)) {
          return <span key={i} className="text-sky-400 font-semibold">{part}</span>;
        }
        if (/^[A-Z][a-zA-Z0-9_]*$/.test(part)) {
          return <span key={i} className="text-gold font-bold">{part}</span>;
        }
        if (part.startsWith('#')) {
          return <span key={i} className="text-slate-500 italic">{part}</span>;
        }
        return <span key={i} className="text-slate-200">{part}</span>;
      })}
    </>
  );
}
