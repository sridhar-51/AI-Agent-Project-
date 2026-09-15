import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  FileCode, 
  ExternalLink,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { PYTHON_CODE_FILES_HR } from '../data/projectsData';

interface CodeExplorerProps {
  onDownloadZip: () => void;
  isZipping: boolean;
}

export const CodeExplorer: React.FC<CodeExplorerProps> = ({
  onDownloadZip,
  isZipping
}) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState<number>(0);
  const [copiedFile, setCopiedFile] = useState<boolean>(false);
  const [copiedCommands, setCopiedCommands] = useState<boolean>(false);

  const activeFile = PYTHON_CODE_FILES_HR[selectedFileIndex];

  const handleCopyActiveCode = () => {
    navigator.clipboard.writeText(activeFile.code);
    setCopiedFile(true);
    setTimeout(() => setCopiedFile(false), 2000);
  };

  const handleCopyCommands = () => {
    const commands = `pip install -r requirements.txt\nstreamlit run app.py`;
    navigator.clipboard.writeText(commands);
    setCopiedCommands(true);
    setTimeout(() => setCopiedCommands(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600/30 text-blue-400 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-500/30">
              Ready-to-Run Code
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              Python 3.10+
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Complete Python Code Suite
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Modular, production-grade files for the AI HR Recruitment Assistant.
            Copy individual files or download the entire zipped repository ready to execute locally or in Google Colab.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onDownloadZip}
            disabled={isZipping}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isZipping ? 'Zipping Files...' : 'Download Project .zip'}</span>
          </button>

          <button
            onClick={() => {
              const colabFile = PYTHON_CODE_FILES_HR.find(f => f.name === 'colab_notebook.py');
              if (colabFile) {
                navigator.clipboard.writeText(colabFile.code);
                setCopiedFile(true);
                setTimeout(() => setCopiedFile(false), 2000);
              }
            }}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium border border-slate-700 flex items-center gap-1.5 transition-all"
            title="Copy single-cell script for Google Colab"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Copy for Google Colab</span>
          </button>
        </div>
      </div>

      {/* Terminal Quick Start Snippet */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
        <div className="flex items-center gap-2 text-slate-300 overflow-x-auto">
          <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-slate-500">$</span>
          <span className="text-amber-300">pip install -r requirements.txt</span>
          <span className="text-slate-500">&amp;&amp;</span>
          <span className="text-blue-300">streamlit run app.py</span>
        </div>
        <button
          onClick={handleCopyCommands}
          className="self-end sm:self-auto text-slate-400 hover:text-white flex items-center gap-1 text-[11px] bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
        >
          {copiedCommands ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied Commands!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy Commands</span>
            </>
          )}
        </button>
      </div>

      {/* File Explorer & Code Viewer Container */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {/* File Tabs Bar */}
        <div className="bg-slate-100 border-b border-slate-200 px-3 pt-2 flex items-center gap-1 overflow-x-auto scrollbar-thin">
          {PYTHON_CODE_FILES_HR.map((file, idx) => {
            const isActive = selectedFileIndex === idx;
            return (
              <button
                key={file.name}
                onClick={() => setSelectedFileIndex(idx)}
                className={`px-3.5 py-2 rounded-t-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all border-t border-l border-r ${
                  isActive
                    ? 'bg-slate-900 text-cyan-300 border-slate-900 shadow-sm'
                    : 'bg-slate-200/70 hover:bg-slate-200 text-slate-600 border-transparent'
                }`}
              >
                <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{file.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active File Header & Action Bar */}
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-white">
                {activeFile.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 uppercase bg-slate-800 px-2 py-0.5 rounded">
                {activeFile.language}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {activeFile.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyActiveCode}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              {copiedFile ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="relative bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto max-h-[580px] p-4 scrollbar-thin">
          <pre className="leading-relaxed">
            <code>{activeFile.code}</code>
          </pre>
        </div>

        {/* Bottom Helper Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>
              Tip: Save all files into a single folder named <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-slate-800">hr_agent/</code> on your computer.
            </span>
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            {activeFile.code.split('\n').length} lines • UTF-8
          </div>
        </div>
      </div>
    </div>
  );
};
