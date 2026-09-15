/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { ProjectHero } from './components/ProjectHero';
import { CodeExplorer } from './components/CodeExplorer';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { RoadmapAndViva } from './components/RoadmapAndViva';
import { AllProjectsComparison } from './components/AllProjectsComparison';
import { TamilGuideModal } from './components/TamilGuideModal';
import { downloadProjectZip } from './utils/zipGenerator';
import { Code2, Play, Download, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'hero' | 'code' | 'simulator' | 'roadmap' | 'all-projects'>('hero');
  const [isTamilModalOpen, setIsTamilModalOpen] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      await downloadProjectZip();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error('Failed to generate ZIP', err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTamilGuide={() => setIsTamilModalOpen(true)}
        onDownloadZip={handleDownloadZip}
        isZipping={isZipping}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'hero' && (
          <ProjectHero
            onNavigateToCode={() => setActiveTab('code')}
            onNavigateToSimulator={() => setActiveTab('simulator')}
            onNavigateToRoadmap={() => setActiveTab('roadmap')}
          />
        )}

        {activeTab === 'code' && (
          <CodeExplorer
            onDownloadZip={handleDownloadZip}
            isZipping={isZipping}
          />
        )}

        {activeTab === 'simulator' && (
          <InteractiveSimulator />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapAndViva />
        )}

        {activeTab === 'all-projects' && (
          <AllProjectsComparison
            onSelectProject2={() => {
              setActiveTab('hero');
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              #2
            </div>
            <span className="font-semibold text-slate-200">
              AI HR Recruitment Assistant • Agent + Tools + RAG
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>5-Day Final Student Project Suite</span>
            <span>•</span>
            <button
              onClick={() => setIsTamilModalOpen(true)}
              className="text-amber-400 hover:text-amber-300 hover:underline"
            >
              தமிழ் வழிகாட்டி
            </button>
            <span>•</span>
            <button
              onClick={handleDownloadZip}
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              Download Code .zip
            </button>
          </div>
        </div>
      </footer>

      {/* Tamil Guide Modal */}
      <TamilGuideModal
        isOpen={isTamilModalOpen}
        onClose={() => setIsTamilModalOpen(false)}
        onDownloadZip={handleDownloadZip}
      />
    </div>
  );
}
