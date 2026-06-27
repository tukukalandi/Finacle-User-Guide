import React, { useState } from 'react';
import { CATEGORIES, SECTIONS, ProcedureSection } from '../data';
import { cn } from '../lib/utils';
import { Search, ChevronRight, BookOpen, X } from 'lucide-react';

interface SidebarProps {
  selectedSectionId: string;
  onSelectSection: (id: string) => void;
  onCloseMobile?: () => void;
  activeModule: string;
}

export function Sidebar({ selectedSectionId, onSelectSection, onCloseMobile, activeModule }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = SECTIONS.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    section.sectionNumber.includes(searchQuery) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 h-full bg-gray-50 border-r border-gray-200 flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search procedure or menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 bg-gray-100 border-transparent rounded-md text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto w-full p-3 space-y-6 custom-scrollbar">
        {CATEGORIES.filter(c => c.moduleId === activeModule).map(category => {
          const categorySections = filteredSections.filter(s => s.categoryId === category.id);
          
          if (categorySections.length === 0) return null;

          return (
            <div key={category.id} className="space-y-1">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">
                {category.name}
              </h2>
              <div className="space-y-0.5">
                {categorySections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => {
                      onSelectSection(section.id);
                      onCloseMobile?.();
                    }}
                    className={cn(
                      "w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors cursor-pointer",
                      selectedSectionId === section.id
                        ? "bg-red-50 border-l-4 border-red-600 text-red-700 font-medium"
                        : "border-l-4 border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <span className="truncate pr-2">
                      <span className="opacity-60 mr-2 font-mono text-xs">{section.sectionNumber}</span>
                      {section.title}
                    </span>
                    {selectedSectionId === section.id && <ChevronRight size={14} className="text-red-600 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
        {filteredSections.length === 0 && (
          <div className="text-center py-10 text-gray-500 text-sm">
            No sections found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
