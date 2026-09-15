import React from 'react';
import { 
  Briefcase, 
  Code2, 
  PlayCircle, 
  Calendar, 
  Layers, 
  Download, 
  HelpCircle,
  Sparkles,
  Award
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'hero' | 'code' | 'simulator' | 'roadmap' | 'all-projects';
  setActiveTab: (tab: 'hero' | 'code' | 'simulator' | 'roadmap' | 'all-projects') => void;
  onOpenTamilGuide: () => void;
  onDownloadZip: () => void;
  isZipping: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenTamilGuide,
  onDownloadZip,
  isZipping
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Selected Project Tag */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('hero')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base tracking-tight text-white group-hover:text-blue-300 transition-colors">
                    AI Project Hub
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Top Pick #2
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                  AI HR Recruitment Assistant (Agent + Tools + RAG)
                </p>
              </div>
            </button>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            <button
              id="nav-tab-hero"
              onClick={() => setActiveTab('hero')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'hero'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Best Project #2
            </button>
            <button
              id="nav-tab-code"
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              Python Code Suite
            </button>
            <button
              id="nav-tab-simulator"
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'simulator'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
              Live Agent Simulator
            </button>
            <button
              id="nav-tab-roadmap"
              onClick={() => setActiveTab('roadmap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              5-Day Plan & Viva
            </button>
            <button
              id="nav-tab-all-projects"
              onClick={() => setActiveTab('all-projects')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'all-projects'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              All 5 Projects
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Tamil Help Guide Button */}
            <button
              id="tamil-guide-btn"
              onClick={onOpenTamilGuide}
              className="bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm"
              title="Tamil Explanation & Guidance"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>தமிழ் Guide</span>
            </button>

            {/* One-Click Download ZIP */}
            <button
              id="download-zip-btn"
              onClick={onDownloadZip}
              disabled={isZipping}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/30 hover:shadow-blue-500/40 transition-all disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isZipping ? 'Generating ZIP...' : 'Download Code .zip'}</span>
            </button>
          </div>

        </div>

        {/* Mobile Horizontal Navigation */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 scrollbar-none border-t border-slate-800">
          <button
            onClick={() => setActiveTab('hero')}
            className={`px-2.5 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'hero' ? 'bg-blue-600 text-white font-medium' : 'text-slate-300'
            }`}
          >
            Best Pick #2
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'code' ? 'bg-blue-600 text-white font-medium' : 'text-slate-300'
            }`}
          >
            Python Code
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-2.5 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'simulator' ? 'bg-blue-600 text-white font-medium' : 'text-slate-300'
            }`}
          >
            Live Simulator
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-2.5 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'roadmap' ? 'bg-blue-600 text-white font-medium' : 'text-slate-300'
            }`}
          >
            5-Day Plan & Viva
          </button>
          <button
            onClick={() => setActiveTab('all-projects')}
            className={`px-2.5 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'all-projects' ? 'bg-blue-600 text-white font-medium' : 'text-slate-300'
            }`}
          >
            All 5 Projects
          </button>
        </div>

      </div>
    </header>
  );
};
