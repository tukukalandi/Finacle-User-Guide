import React, { useState } from 'react';
import { Menu, Home as HomeIcon, ChevronLeft, ScrollText, Download } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { AIAssistant } from './components/AIAssistant';
import { Home } from './components/Home';
import { SECTIONS, CATEGORIES } from './data';

export default function App() {
  const [activeModule, setActiveModule] = useState<string>('home');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // When activeModule changes, we reset the selectedSectionId to the first section of that module
  React.useEffect(() => {
    if (activeModule !== 'home') {
      const moduleCategories = CATEGORIES.filter(c => c.moduleId === activeModule);
      if (moduleCategories.length > 0) {
        const firstCategory = moduleCategories[0];
        const firstSection = SECTIONS.find(s => s.categoryId === firstCategory.id);
        if (firstSection) setSelectedSectionId(firstSection.id);
      }
    }
  }, [activeModule]);

  const selectedSection = SECTIONS.find(s => s.id === selectedSectionId) || SECTIONS[0];

  return (
    <div className="flex flex-col w-full h-screen bg-white font-sans overflow-hidden">
      {/* Header */}
      <header className="flex flex-col shrink-0 z-20 shadow-sm relative w-full font-sans">
        {/* Top Bar - Dark Maroon Gradient */}
        <div className="bg-gradient-to-r from-[#6a1518] via-[#4a0e10] to-[#3b0809] text-white px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-[#821e20]">
          <div className="flex items-center gap-4">
            {activeModule !== 'home' ? (
              <button 
                className="md:hidden text-white hover:text-gray-200 transition-colors focus:outline-none flex-shrink-0"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu size={24} />
              </button>
            ) : (
              <div className="md:hidden w-6 h-6 flex-shrink-0" />
            )}
            
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-xl md:text-2xl text-white drop-shadow-sm uppercase tracking-wide leading-tight">
                Finacle User Guide
              </h1>
              <span className="text-[10px] md:text-xs font-semibold text-gray-300 uppercase tracking-wider block mt-0.5">
                Dhenkanal Postal Division | Odisha
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end text-xs md:text-sm font-medium tracking-wide text-white">
              <span className="uppercase text-[10px] text-[#e0a8a8] font-bold tracking-wider">Prepared By</span>
              <span className="font-bold text-sm md:text-base">Kalandi Charan Sahoo</span>
              <span className="text-[10px] text-gray-300 uppercase tracking-wider">Postal Assistant, Dhenkanal RS SO</span>
            </div>
            
            <div className="md:hidden">
              <button className="text-white">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Bright Red */}
        <div className="bg-[#d32f2f] w-full flex items-center px-4 h-10 sm:h-12 shadow-md">
          {activeModule !== 'home' ? (
            <button 
              onClick={() => setActiveModule('home')}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold hover:bg-black/10 px-4 h-full transition-colors text-white uppercase tracking-wider"
            >
              <span>Home</span>
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold bg-[#e55335] px-4 h-full transition-colors text-white uppercase tracking-wider">
              <span>Home</span>
            </div>
          )}
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {activeModule === 'home' ? (
          <main className="flex-1 h-full w-full overflow-y-auto bg-gray-50 flex flex-col">
            <div className="lg:hidden block bg-red-50 text-red-700 p-3 text-xs sm:text-sm font-medium text-center border-b border-red-100">
              Prepared by Kalandi Charan Sahoo, Postal Assistant, Dhenkanal RS SO
            </div>
            <Home onSelectModule={setActiveModule} />
          </main>
        ) : ['rd', 'cif', 'scss', 'sb', 'td', 'mis', 'ssa', 'ppf', 'nsc_kvp', 'inventory', 'common_txn', 'common_issues', 'menus'].includes(activeModule) ? (
          <>
            {/* Mobile Sidebar Backdrop */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Sidebar Container */}
            <div className={`fixed inset-y-0 left-0 z-50 transform bg-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0 h-full ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <Sidebar 
                selectedSectionId={selectedSectionId} 
                onSelectSection={setSelectedSectionId} 
                onCloseMobile={() => setIsSidebarOpen(false)}
                activeModule={activeModule}
              />
            </div>

            <main className="flex-1 h-full w-full overflow-y-auto px-4 md:px-10 py-6 md:py-10 scroll-smooth">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8 border-b-4 border-yellow-400 pb-4 flex justify-between items-end">
                  <div>
                    <span className="inline-block px-3 py-1 bg-red-600 text-white border border-red-700 shadow-sm text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                      Section {selectedSection.sectionNumber}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        const content = document.getElementById('printable-content');
                        if (!content) return;
                        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
                        const footer = "</body></html>";
                        const sourceHTML = header + content.innerHTML + footer;
                        
                        const blob = new Blob(['\ufeff', sourceHTML], {
                          type: 'application/msword'
                        });
                        const url = URL.createObjectURL(blob);
                        const fileDownload = document.createElement("a");
                        document.body.appendChild(fileDownload);
                        fileDownload.href = url;
                        fileDownload.download = `${selectedSection.title || 'document'}.doc`;
                        fileDownload.click();
                        document.body.removeChild(fileDownload);
                        URL.revokeObjectURL(url);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-xs font-bold hover:bg-blue-100 transition-colors shadow-sm"
                    >
                      <Download size={14} />
                      DOC
                    </button>
                    <button 
                      onClick={() => {
                        const element = document.getElementById('printable-content');
                        if (!element) return;
                        const opt = {
                          margin:       10,
                          filename:     `${selectedSection.title || 'document'}.pdf`,
                          image:        { type: 'jpeg', quality: 0.98 },
                          html2canvas:  { scale: 2 },
                          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
                        };
                        import('html2pdf.js').then(html2pdf => {
                           html2pdf.default().set(opt).from(element).save();
                        });
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-md text-xs font-bold hover:bg-red-100 transition-colors shadow-sm"
                    >
                      <Download size={14} />
                      PDF
                    </button>
                  </div>
                </div>
                <div id="printable-content">
                  <MarkdownRenderer>
                    {selectedSection.content}
                  </MarkdownRenderer>
                </div>
                
                <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400 pb-8">
                  <span>DOP Finacle User Guide Ver 1.1</span>
                  <span>West Bengal Circle</span>
                </div>
              </div>
            </main>
          </>
        ) : (
          <main className="flex-1 h-full w-full flex flex-col items-center justify-center bg-gray-50 p-6">
             <div className="text-center max-w-md">
               <div className="text-gray-400 mb-6 flex justify-center bg-white p-6 rounded-full inline-flex border border-gray-100 shadow-sm">
                 <ScrollText size={48} className="text-red-500" />
               </div>
               <h2 className="text-2xl font-bold text-gray-900 mb-3">Module Coming Soon</h2>
               <p className="text-gray-500 mb-8 leading-relaxed">The <strong className="font-semibold text-gray-900 uppercase">{activeModule}</strong> section is currently under development and will be added in a future update.</p>
               <button 
                onClick={() => setActiveModule('home')}
                className="bg-red-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-red-700 transition-all flex items-center justify-center gap-2 w-full sm:w-auto mx-auto shadow-sm"
               >
                 <ChevronLeft size={18} />
                 Back to Home
               </button>
             </div>
          </main>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-500 py-3 px-4 text-center text-xs border-t border-gray-300 shrink-0">
        <p>This is a reference guide for DOP Finacle. Always verify procedures with official India Post circulars and updates.</p>
      </footer>

      <AIAssistant activeModule={activeModule} />
    </div>
  );
}
