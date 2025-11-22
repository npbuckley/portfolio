import { BookOpen, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { PAPERS } from '../data/data';

const Papers = () => (
  <div className="animate-fade-in max-w-6xl">
    <SectionTitle title="Publications"/>
    
    <div className="space-y-4">
      {PAPERS.map(paper => (
        <div key={paper.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">
                {paper.title}
              </h3>
              <div className="flex items-center text-sm text-blue-600 font-medium mb-3">
                <BookOpen size={16} className="mr-2" />
                {paper.conference}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {paper.abstract}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="flex items-center space-x-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium border border-slate-200 px-4 py-2 rounded-lg hover:bg-blue-50">
                <span>Read Paper</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Papers;