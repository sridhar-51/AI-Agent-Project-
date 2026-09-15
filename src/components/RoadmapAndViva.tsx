import React, { useState } from 'react';
import { 
  Calendar, 
  HelpCircle, 
  CheckCircle2, 
  Terminal, 
  Lightbulb, 
  ChevronRight, 
  Copy, 
  Check,
  MessageSquare
} from 'lucide-react';
import { FIVE_DAY_ROADMAP, VIVA_QUESTIONS } from '../data/roadmapData';

export const RoadmapAndViva: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'viva'>('roadmap');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [languageMode, setLanguageMode] = useState<'both' | 'tamil' | 'english'>('both');
  const [copiedQuestionIndex, setCopiedQuestionIndex] = useState<number | null>(null);

  const activeDayData = FIVE_DAY_ROADMAP.find(d => d.day === selectedDay) || FIVE_DAY_ROADMAP[0];

  const handleCopyViva = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedQuestionIndex(idx);
    setTimeout(() => setCopiedQuestionIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-purple-500/30">
              Curriculum Milestone Tracker
            </span>
            <span className="bg-blue-500/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full border border-blue-500/30">
              5-Day Roadmap &amp; Viva Q&amp;A
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            5-Day Project Roadmap &amp; Viva Defense
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Structured day-by-day plan matching your slide: &quot;develops it into their final project across the 5 days&quot;
            along with common faculty viva questions and Tamil explanations.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'roadmap' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>5-Day Roadmap</span>
          </button>
          <button
            onClick={() => setActiveTab('viva')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'viva' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Viva Questions</span>
          </button>
        </div>
      </div>

      {activeTab === 'roadmap' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Day Selector Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              Select Day (1 to 5)
            </h3>
            {FIVE_DAY_ROADMAP.map(item => (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item.day)}
                className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                  selectedDay === item.day
                    ? 'border-blue-600 bg-blue-50/60 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                      selectedDay === item.day ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      D{item.day}
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      Day {item.day}: {item.title.split('&')[0]}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 pl-8 line-clamp-1">
                    {item.focus}
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 ${selectedDay === item.day ? 'text-blue-600' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

          {/* Active Day Detail Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Day {activeDayData.day} Milestone
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {activeDayData.title}
                </h3>
              </div>
              <span className="bg-slate-100 text-slate-700 text-xs font-mono font-semibold px-2.5 py-1 rounded-lg">
                Step {activeDayData.day} of 5
              </span>
            </div>

            {/* Focus Summary */}
            <div className="text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="font-semibold text-slate-900">Daily Objective: </span>
              {activeDayData.focus}
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Deliverables to Complete on Day {activeDayData.day}</span>
              </h4>
              <div className="space-y-2">
                {activeDayData.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Command / Code Milestone */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-slate-700" />
                <span>Day {activeDayData.day} Code Milestone</span>
              </h4>
              <div className="bg-slate-900 text-emerald-300 font-mono text-xs p-3.5 rounded-xl border border-slate-800">
                <code>{activeDayData.milestoneCode}</code>
              </div>
            </div>

            {/* Tamil Mentor Tip */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-900 font-semibold">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>தமிழ் வழிகாட்டி (Tamil Mentor Note):</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                {activeDayData.tamilTip}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Viva Q&A Tab */
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-800">
                Common Mentor &amp; Faculty Viva Defense Questions
              </span>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <span className="text-slate-500 text-[11px] mr-1">Language:</span>
              <button
                onClick={() => setLanguageMode('both')}
                className={`px-2.5 py-0.5 rounded text-xs ${languageMode === 'both' ? 'bg-white shadow-xs font-bold text-blue-700' : 'text-slate-600'}`}
              >
                Both (English + தமிழ்)
              </button>
              <button
                onClick={() => setLanguageMode('tamil')}
                className={`px-2.5 py-0.5 rounded text-xs ${languageMode === 'tamil' ? 'bg-white shadow-xs font-bold text-blue-700' : 'text-slate-600'}`}
              >
                தமிழ் மட்டும்
              </button>
              <button
                onClick={() => setLanguageMode('english')}
                className={`px-2.5 py-0.5 rounded text-xs ${languageMode === 'english' ? 'bg-white shadow-xs font-bold text-blue-700' : 'text-slate-600'}`}
              >
                English Only
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {VIVA_QUESTIONS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-xs">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <div>
                      {(languageMode === 'both' || languageMode === 'english') && (
                        <h4 className="font-bold text-sm text-slate-900 leading-snug">
                          {item.question}
                        </h4>
                      )}
                      {(languageMode === 'both' || languageMode === 'tamil') && (
                        <h5 className="text-xs font-medium text-blue-800 mt-1">
                          {item.questionTamil}
                        </h5>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded uppercase font-mono">
                      {item.conceptTag}
                    </span>
                    <button
                      onClick={() => handleCopyViva(`${item.question}\n\nAnswer: ${item.answer}\n\nTamil: ${item.answerTamil}`, idx)}
                      className="text-slate-400 hover:text-slate-600 p-1"
                      title="Copy Q&A"
                    >
                      {copiedQuestionIndex === idx ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Answer Section */}
                <div className="pl-8 space-y-2 pt-1 border-t border-slate-100">
                  {(languageMode === 'both' || languageMode === 'english') && (
                    <div className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                      <span className="font-semibold text-slate-900">Recommended English Answer: </span>
                      {item.answer}
                    </div>
                  )}

                  {(languageMode === 'both' || languageMode === 'tamil') && (
                    <div className="text-xs text-blue-900 leading-relaxed bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      <span className="font-semibold text-blue-950">தமிழ் விளக்கம் (Tamil Explanation for Understanding): </span>
                      {item.answerTamil}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
