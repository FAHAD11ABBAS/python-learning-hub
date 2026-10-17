import React from 'react';

/**
 * Transforms any text containing bold (**...**) or code (`...`) tokens
 * into clean semantic React JSX elements (<strong>, <code>, <span>),
 * completely removing raw Markdown characters from the user display.
 */
export function formatRichText(rawText) {
  if (!rawText) return null;
  if (typeof rawText !== 'string') return rawText;

  // Split by markdown bold (**...**) or code (`...`)
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const tokens = rawText.split(regex);

  return (
    <>
      {tokens.map((token, index) => {
        if (!token) return null;

        if (token.startsWith('**') && token.endsWith('**')) {
          const content = token.slice(2, -2);
          return (
            <strong key={index} className="text-white font-semibold">
              {content}
            </strong>
          );
        }

        if (token.startsWith('`') && token.endsWith('`')) {
          const content = token.slice(1, -1);
          return (
            <code
              key={index}
              className="px-1.5 py-0.5 rounded bg-navy-card border border-navy-border text-gold font-mono text-[11px] inline-block mx-0.5"
            >
              {content}
            </code>
          );
        }

        return <span key={index}>{token}</span>;
      })}
    </>
  );
}

/**
 * Parses multi-paragraph theory text into structured headings, paragraphs, and list items
 * without any remaining markdown asterisks or backticks.
 */
export function parseTheoryContent(rawMarkdown) {
  if (!rawMarkdown) return null;

  const rawBlocks = rawMarkdown.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-4 leading-relaxed text-slate-300 text-sm">
      {rawBlocks.map((block, blockIdx) => {
        const trimmed = block.trim();

        // Level 3 Heading: ### Title
        if (trimmed.startsWith('### ')) {
          const headingText = trimmed.replace(/^###\s+/, '');
          return (
            <h3
              key={blockIdx}
              className="text-base sm:text-lg font-bold text-white mt-6 mb-2 flex items-center gap-2.5 border-b border-navy-border pb-2"
            >
              <span className="w-1.5 h-4 rounded-full bg-crimson inline-block" />
              <span>{formatRichText(headingText)}</span>
            </h3>
          );
        }

        // List block starting with * or -
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const listLines = trimmed.split(/\n(?=[*-]\s)/);
          return (
            <ul key={blockIdx} className="space-y-2 my-3 pl-2">
              {listLines.map((line, lineIdx) => {
                const cleanedLine = line.replace(/^[*-]\s+/, '');
                return (
                  <li key={lineIdx} className="flex items-start gap-2.5 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="leading-relaxed">{formatRichText(cleanedLine)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Table block
        if (trimmed.includes('|')) {
          const rows = trimmed.split('\n').filter(r => r.includes('|'));
          if (rows.length >= 2) {
            const headerCells = rows[0].split('|').map(c => c.trim()).filter(Boolean);
            const bodyRows = rows.slice(2);

            return (
              <div key={blockIdx} className="overflow-x-auto my-4 rounded-xl border border-navy-border shadow-md">
                <table className="w-full text-xs font-sans text-left border-collapse">
                  <thead className="bg-navy-card border-b border-navy-border text-gold font-mono">
                    <tr>
                      {headerCells.map((h, i) => (
                        <th key={i} className="p-3 font-semibold">{formatRichText(h)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-border bg-navy/80">
                    {bodyRows.map((r, ri) => {
                      const cells = r.split('|').map(c => c.trim()).filter(Boolean);
                      return (
                        <tr key={ri} className="hover:bg-navy-card/50 transition-colors">
                          {cells.map((cell, ci) => (
                            <td key={ci} className="p-3 text-slate-300 font-mono text-[11px]">
                              {formatRichText(cell)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // Regular paragraph
        return (
          <p key={blockIdx} className="text-slate-300 leading-relaxed text-sm">
            {formatRichText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
