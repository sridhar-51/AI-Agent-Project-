import React from 'react';
import { X, CheckCircle2, Terminal, HelpCircle, Download, BookOpen } from 'lucide-react';

interface TamilGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadZip: () => void;
}

export const TamilGuideModal: React.FC<TamilGuideModalProps> = ({
  isOpen,
  onClose,
  onDownloadZip
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="text-base font-bold text-white">
                தமிழ் வழிகாட்டி &amp; முழு விளக்கம் (Tamil Project Guide)
              </h3>
              <p className="text-xs text-blue-300">
                AI HR Recruitment Assistant (Agent + Tools + RAG)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-slate-800 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1: En Project #2 Best? */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-blue-950 flex items-center gap-1.5 text-sm">
              <span className="text-blue-600 font-extrabold">1.</span>
              <span>ஏன் இந்த Project #2 &quot;AI HR Recruitment Assistant&quot; சிறந்த தேர்வு?</span>
            </h4>
            <p className="text-blue-900 text-xs">
              உங்கள் ஸ்லைடில் உள்ள 5 ப்ராஜெக்ட்டுகளில், <strong>AI HR Recruitment Assistant</strong> தான் மிகச் சிறந்த (Best) ப்ராஜெக்ட். இதற்கான காரணங்கள்:
            </p>
            <ul className="text-xs text-blue-950 space-y-1 pl-4 list-disc">
              <li>
                <strong>3 முக்கிய தூண்கள் (Core Capabilities):</strong> இதில் <strong>Autonomous Agent Loop</strong>, <strong>RAG Vector Search</strong>, மற்றும் <strong>Custom Tools</strong> ஆகிய மூன்றுமே முழுமையாக இணைக்கப்பட்டுள்ளன.
              </li>
              <li>
                <strong>Live Demo தாக்கம்:</strong> ஒரு Resume-ஐ உள்ளிட்டு, Job Description-உடன் ஒப்பீடு செய்து, உடனடி மேட்ச் ஸ்கோர் (Match Score %) மற்றும் வேட்பாளரின் குறைபாடுகளுக்கு ஏற்ப இன்டர்வியூ கேள்விகள் (Interview Questions with Rubric) திரையில் தோன்றுவது மதிப்பீட்டாளர்கள் மற்றும் பேராசிரியர்களை வெகுவாகக் கவரும்.
              </li>
              <li>
                <strong>நிறுவனத் தேவை (Industry Demand):</strong> உண்மையான கார்ப்பரேட் HR துறையில் ஆயிரக்கணக்கான ரெஸ்யூம்களை வடிகட்ட (Resume Screening) உதவும் நிஜ உலகத் திட்டம்.
              </li>
            </ul>
          </div>

          {/* Section 2: Code File Structure */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <span className="text-blue-600 font-extrabold">2.</span>
              <span>Python Code கோப்புகளின் விளக்கம்:</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="font-mono font-bold text-blue-700 mb-0.5">app.py</div>
                <p className="text-slate-600 text-[11px]">
                  Streamlit Web UI. இதில் Resume அப்லோட், மேட்ச் ஸ்கோர், ரேடார் பார் மற்றும் ரிப்போர்ட்டுகள் அழகாகத் தெரியும்.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="font-mono font-bold text-blue-700 mb-0.5">agent.py</div>
                <p className="text-slate-600 text-[11px]">
                  ஏஜென்ட் ஆர்க்கெஸ்ட்ரேட்டர். இது டூல்களை (Tools) எப்போது அழைக்க வேண்டும் மற்றும் ஷார்ட்லிஸ்ட் செய்யலாமா என முடிவெடுக்கும்.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="font-mono font-bold text-blue-700 mb-0.5">rag_engine.py</div>
                <p className="text-slate-600 text-[11px]">
                  RAG பைப்லைன். டெக்ஸ்ட்டை சங்க் (Chunk) செய்து Cosine Similarity மூலம் செமண்டிக் தேடல் செய்கிறது.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="font-mono font-bold text-blue-700 mb-0.5">tools.py</div>
                <p className="text-slate-600 text-[11px]">
                  ரெஸ்யூம் பார்சர், ஸ்கோர் கால்குலேட்டர் மற்றும் இன்டர்வியூ கேள்விகள் உருவாக்கும் பிரத்யேக செயல்பாடுகள்.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: How to run on your laptop */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <span className="text-blue-600 font-extrabold">3.</span>
              <span>உங்கள் கணினியில் இயக்குவது எப்படி? (Run Instructions):</span>
            </h4>

            <div className="bg-slate-900 text-slate-100 font-mono text-xs p-4 rounded-xl space-y-2 border border-slate-800">
              <div className="text-slate-400"># 1. பைல்ஸ்களை பதிவிறக்கவும் (Download ZIP)</div>
              <div className="text-emerald-400">pip install -r requirements.txt</div>
              <div className="text-slate-400"># 2. அப்ளிகேஷனை இயக்கவும்</div>
              <div className="text-blue-300">streamlit run app.py</div>
            </div>
            <p className="text-xs text-slate-500">
              கட்டளை இயங்கியதும் தானாகவே பிரவுசரில் <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">http://localhost:8501</code> திறக்கும்.
            </p>
          </div>

          {/* Section 4: Presentation / Viva Tips */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs space-y-1.5">
            <h5 className="font-bold text-amber-950 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>வைவா (Viva) டிப்ஸ்:</span>
            </h5>
            <p className="text-amber-900">
              மதிப்பீட்டாளர் கேள்வி கேட்டால்: <em>&quot;எங்கள் ஏஜென்ட் RAG மூலம் ரெஸ்யூம் தகவல்களைத் துல்லியமாகப் பெற்று, டூல்கள் மூலமாக ஸ்கில் இடைவெளிகளைக் கண்டறிந்து, வேட்பாளருக்குப் பொருத்தமான கேள்விகளைத் தயார் செய்கிறது&quot;</em> என்று சுலபமாக விளக்கலாம்!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onDownloadZip}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>முழு கோப்புகளையும் ZIP-ஆக பதிவிறக்கு (Download ZIP)</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-medium transition-all"
          >
            மூடு (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
