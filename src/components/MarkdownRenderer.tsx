import React from 'react';
import Markdown from 'react-markdown';
import { cn } from '../lib/utils';

export function MarkdownRenderer({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("markdown-body", className)}>
      <Markdown
        components={{
          h1: ({ node, ...props }) => <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4 pb-2 border-b border-gray-200" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700 marker:font-semibold marker:text-gray-500" {...props} />,
          li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
          code: ({ node, inline, ...props }: any) => 
            inline ? (
              <code className="bg-yellow-50 text-red-700 px-1.5 py-0.5 rounded font-mono text-sm border border-yellow-200" {...props} />
            ) : (
              <code className="block bg-gray-50 p-4 rounded-lg text-sm font-mono border border-gray-200 overflow-x-auto text-gray-800 mb-4" {...props} />
            ),
          blockquote: ({ node, ...props }) => {
            const text = (node?.children[0] as any)?.children?.[0]?.value || '';
            const isWarning = text.toLowerCase().includes('warning') || text.toLowerCase().includes('error');
            return (
              <blockquote 
                className={cn(
                  "border-l-4 p-4 mb-4 rounded-r-lg text-sm",
                  isWarning ? "border-red-500 bg-red-50 text-red-800" : "border-amber-400 bg-amber-50 text-amber-800"
                )} 
                {...props} 
              />
            );
          },
          table: ({ node, ...props }) => <div className="overflow-x-auto mb-4"><table className="w-full text-left border-collapse" {...props} /></div>,
          th: ({ node, ...props }) => <th className="border-b-2 border-gray-200 bg-gray-50 px-4 py-2 font-semibold text-gray-700" {...props} />,
          td: ({ node, ...props }) => <td className="border-b border-gray-200 px-4 py-2 text-gray-700" {...props} />,
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
