import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import Markdown from 'react-markdown';
import { SECTIONS, CATEGORIES } from '../data';

interface Message {
  role: 'user' | 'model';
  parts: [{ text: string }];
}

interface AIAssistantProps {
  activeModule?: string;
}

export function AIAssistant({ activeModule }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: 'Hello! I am your Finacle Assistant. How can I help you today?' }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', parts: [{ text: userMessage }] }]);
    setIsLoading(true);

    try {
      // Gather context based on activeModule or provide all if not selected
      let relevantSections = SECTIONS;
      
      if (activeModule && activeModule !== 'home') {
        const moduleCategoryIds = CATEGORIES.filter(c => c.moduleId === activeModule).map(c => c.id);
        if (moduleCategoryIds.length > 0) {
           relevantSections = SECTIONS.filter(s => moduleCategoryIds.includes(s.categoryId));
        } else {
           relevantSections = []; // No data for this module yet
        }
      }

      const contextText = relevantSections.length > 0 ? relevantSections.map(s => s.content).join('\n\n---\n\n') : "The user is currently viewing a section that does not have specific manual procedures documented yet. You can still answer general questions or politely state you don't have information on this specific topic.";

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', parts: [{ text: userMessage }] }].filter(m => m.parts[0].text !== 'Hello! I am your Finacle Assistant. How can I help you today?'),
          context: contextText
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to fetch from API');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: data.reply }] }]);
    } catch (err: any) {
      console.error(err);
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      if (err.message && err.message !== 'Failed to fetch from API') {
        errorMessage = err.message;
      }
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: errorMessage }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all z-40 flex items-center justify-center",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <MessageSquare size={24} />
      </button>

      <div
        className={cn(
          "fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-[400px] h-[calc(100vh-6rem)] sm:h-[600px] max-h-[800px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 transform transition-all origin-bottom-right overflow-hidden border border-gray-200",
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-red-600 text-white p-4 flex justify-between items-center z-10 shrink-0 border-b-4 border-yellow-400">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-semibold text-sm">Finacle AI Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 custom-scrollbar flex flex-col gap-4">
          {messages.map((msg, index) => {
            const isUser = msg.role === 'user';
            return (
              <div key={index} className={cn("flex flex-col max-w-[85%]", isUser ? "self-end items-end" : "self-start items-start")}>
                <div 
                  className={cn(
                    "text-xs mb-1 font-medium flex items-center gap-1", 
                    isUser ? "text-gray-500 flex-row-reverse" : "text-red-600"
                  )}
                >
                  {isUser ? <User size={12} /> : <Bot size={12} />}
                  <span>{isUser ? 'You' : 'AI'}</span>
                </div>
                <div 
                  className={cn(
                    "p-3 rounded-2xl text-sm",
                    isUser 
                      ? "bg-red-600 text-white rounded-tr-none" 
                      : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm markdown-body"
                  )}
                >
                  {isUser ? (
                    msg.parts[0].text
                  ) : (
                    <div className="text-sm font-sans space-y-2">
                      <Markdown
                        components={{
                          p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                          ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                          strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                          code: ({ node, inline, ...props }: any) => 
                            inline ? (
                              <code className="bg-gray-100 text-red-700 px-1 py-0.5 rounded font-mono text-xs" {...props} />
                            ) : (
                              <code className="block bg-gray-100 p-2 rounded text-xs font-mono overflow-x-auto text-gray-800 mb-2" {...props} />
                            ),
                        }}
                      >
                       {msg.parts[0].text}
                      </Markdown>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {isLoading && (
            <div className="self-start flex flex-col max-w-[85%]">
              <div className="text-xs mb-1 font-medium text-red-600 flex items-center gap-1">
                <Bot size={12} />
                <span>AI</span>
              </div>
              <div className="p-4 bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-none shadow-sm flex items-center justify-center">
                <Loader2 size={16} className="animate-spin text-red-600" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-gray-200 shrink-0">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-gray-100 border-transparent rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-red-600 text-white p-2.5 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
