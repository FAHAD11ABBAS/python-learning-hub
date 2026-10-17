import React from 'react';

/**
 * Cleans inline text:
 * - Converts bold **...** into <strong class="text-white font-semibold">...</strong>
 * - Converts italic *...* into <em class="text-slate-200 italic">...</em>
 * - Converts `...` into <code class="px-1.5 py-0.5 rounded bg-navy-card border border-navy-border text-gold font-mono text-[11px] inline-block mx-0.5">...</code>
 * - Strips any leading bullet asterisks (* or -)
 * - Completely removes any leftover raw asterisks (* or **) so no asterisk ever displays
 */
export function cleanInline(text) {
  if (!text) return '';
  if (typeof text !== 'string') return String(text);

  let s = text.trim();

  // Strip leading bullet markers if passed directly
  s = s.replace(/^[*-]\s+/, '');

  // Protect existing code tags or markdown backticks
  const codeBlocks = [];
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (match, inner) => {
    codeBlocks.push(inner.replace(/\*/g, ''));
    return `__CODE_TAG_${codeBlocks.length - 1}__`;
  });
  s = s.replace(/`([^`]+)`/g, (match, code) => {
    codeBlocks.push(code.replace(/\*/g, ''));
    return `__CODE_TAG_${codeBlocks.length - 1}__`;
  });

  // Convert markdown bold **...**
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

  // Convert markdown italic *...*
  s = s.replace(/\*([^*]+)\*/g, '<em class="text-slate-200 italic">$1</em>');

  // Ensure any existing <strong> tags have styling
  s = s.replace(/<strong>/gi, '<strong class="text-white font-semibold">');
  s = s.replace(/<em>/gi, '<em class="text-slate-200 italic">');

  // Strip ANY remaining raw asterisks completely
  s = s.replace(/\*{1,2}/g, '');

  // Restore code blocks with gold badge styling
  s = s.replace(/__CODE_TAG_(\d+)__/g, (match, idx) => {
    return `<code class="px-1.5 py-0.5 rounded bg-navy-card border border-navy-border text-gold font-mono text-[11px] inline-block mx-0.5">${codeBlocks[idx]}</code>`;
  });

  return s;
}

/**
 * Transforms any text into clean semantic HTML without any raw asterisks.
 */
export function formatRichText(rawText) {
  if (!rawText) return null;
  if (typeof rawText !== 'string') return rawText;

  const html = cleanInline(rawText);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function convertMarkdownToHtml(md) {
  if (!md) return '';
  const lines = md.trim().split('\n');
  const htmlBlocks = [];
  let inList = false;
  let listType = 'ul';
  let listItems = [];
  let inTable = false;
  let tableRows = [];

  function flushList() {
    if (inList && listItems.length > 0) {
      const cls = listType === 'ul' ? 'list-disc pl-5 space-y-2 my-3' : 'list-decimal pl-5 space-y-2 my-3';
      const tag = listType;
      const inner = listItems.map(item => `  <li>${cleanInline(item)}</li>`).join('\n');
      htmlBlocks.push(`<${tag} class="${cls}">\n${inner}\n</${tag}>`);
      listItems = [];
      inList = false;
    }
  }

  function flushTable() {
    if (inTable && tableRows.length >= 2) {
      const headers = tableRows[0].split('|').map(c => c.trim()).filter(Boolean);
      const dataRows = tableRows.slice(2);
      let tHtml = `<div class="overflow-x-auto my-4 rounded-xl border border-navy-border shadow-md">\n`;
      tHtml += `  <table class="w-full text-xs font-sans text-left border-collapse">\n`;
      tHtml += `    <thead class="bg-navy-card border-b border-navy-border text-gold font-mono">\n      <tr>\n`;
      headers.forEach(h => {
        tHtml += `        <th class="p-3 font-semibold">${cleanInline(h)}</th>\n`;
      });
      tHtml += `      </tr>\n    </thead>\n`;
      tHtml += `    <tbody class="divide-y divide-navy-border bg-navy/80">\n`;
      dataRows.forEach(row => {
        const cells = row.split('|').map(c => c.trim()).filter(Boolean);
        tHtml += `      <tr class="hover:bg-navy-card/50 transition-colors">\n`;
        cells.forEach(cell => {
          tHtml += `        <td class="p-3 text-slate-300 font-mono text-[11px]">${cleanInline(cell)}</td>\n`;
        });
        tHtml += `      </tr>\n`;
      });
      tHtml += `    </tbody>\n  </table>\n</div>`;
      htmlBlocks.push(tHtml);
      tableRows = [];
      inTable = false;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (line.startsWith('|') && line.endsWith('|')) {
      flushList();
      inTable = true;
      tableRows.push(line);
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (line.startsWith('* ') || line.startsWith('- ')) {
      if (!inList || listType !== 'ul') {
        flushList();
        inList = true;
        listType = 'ul';
      }
      listItems.push(line.replace(/^[*-]\s+/, ''));
      continue;
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      if (!inList || listType !== 'ol') {
        flushList();
        inList = true;
        listType = 'ol';
      }
      listItems.push(orderedMatch[2]);
      continue;
    }

    flushList();

    if (!line) continue;

    if (line.startsWith('### ')) {
      const heading = line.replace(/^###\s+/, '');
      htmlBlocks.push(
        `<h3 class="text-base sm:text-lg font-bold text-white mt-6 mb-2 flex items-center gap-2.5 border-b border-navy-border pb-2"><span class="w-1.5 h-4 rounded-full bg-crimson inline-block"></span><span>${cleanInline(heading)}</span></h3>`
      );
      continue;
    }

    htmlBlocks.push(`<p class="text-slate-300 leading-relaxed text-sm">${cleanInline(line)}</p>`);
  }

  flushList();
  flushTable();

  return htmlBlocks.join('\n\n');
}

/**
 * Parses and renders theory content into clean semantic HTML:
 * - <ul class="list-disc pl-5 space-y-2">, <li>
 * - <ol class="list-decimal pl-5 space-y-2">, <li>
 * - <h3> with crimson accent dot
 * - <strong>, <em>, <code>
 * - Tables and code blocks
 * - Absolutely zero raw asterisks
 */
export function parseTheoryContent(rawContent) {
  if (!rawContent) return null;
  if (typeof rawContent !== 'string') return null;

  let content = rawContent.trim();
  let finalHtml = '';

  if (content.includes('<h3') || content.includes('<ul') || content.includes('<p')) {
    finalHtml = cleanInline(content);
  } else {
    finalHtml = convertMarkdownToHtml(content);
  }

  return (
    <div
      className="space-y-4 leading-relaxed text-slate-300 text-sm theory-content"
      dangerouslySetInnerHTML={{ __html: finalHtml }}
    />
  );
}
