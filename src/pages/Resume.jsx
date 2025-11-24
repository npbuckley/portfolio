import { Code, BookOpen, Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { EXPERIENCE, EDUCATION, SITE_DATA } from '../data/data';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import SkillCard from '../components/SkillCard';
import RESUME from '../files/Resume.pdf';

const Resume = () => (
  <div className="animate-fade-in max-w-6xl">
    <SectionTitle title="Resume"/>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content (Experience) */}
      <div className="lg:col-span-2 space-y-8">
        <h3 className="text-xl font-bold text-slate-900 flex items-center">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 text-sm">
            <Code size={16} />
          </span>
          Work Experience
        </h3>

        <div className="border-l-2 border-slate-200 ml-4 space-y-8 pb-2">
          {EXPERIENCE.map((j) => (<ExperienceCard job={j} />))}
        </div>

        <h3 className="text-xl font-bold text-slate-900 flex items-center pt-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 text-sm">
            <BookOpen size={16} />
          </span>
          Education
        </h3>

        <div className="border-l-2 border-slate-200 ml-4 space-y-8">
          {EDUCATION.map((e) => (<EducationCard edu={e} />))}
        </div>
      </div>

      {/* Sidebar (Skills/Tools) */}
      <div className="space-y-8">
        <div className="bg-background-dark text-background-light p-6 rounded-xl shadow-md">
          <h3 className="font-bold mb-2">Download Resume</h3>
          <p className="text-background-light text-sm mb-4">
            Get a PDF copy of my resume for offline viewing.
          </p>
          <a
            href={RESUME}
            download="NicholasBuckleyResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full bg-white text-background-dark py-2 px-4 rounded-lg font-medium text-sm hover:bg-tertiary transition-colors flex items-center justify-center">
              <Download size={16} className="mr-2" /> Download PDF
            </button>
          </a>
        </div>

        <div className="bg-background-light p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">All Technical Skills</h3>
          <div>
            <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
              Languages
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {SITE_DATA.skills.languages.map(skill => (<SkillCard skill={skill} />))}
            </div>
          </div>

          <div>
            <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
              Frontend
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {SITE_DATA.skills.frontend.map(skill => (<SkillCard skill={skill} />))}
            </div>
          </div>

          <div>
            <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
              Backend
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {SITE_DATA.skills.backend.map(skill => (<SkillCard skill={skill} />))}
            </div>
          </div>

          <div>
            <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
              Databases
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {SITE_DATA.skills.databases.map(skill => (<SkillCard skill={skill} />))}
            </div>
          </div>

          <div>
            <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
              Other
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {SITE_DATA.skills.other.map(skill => (<SkillCard skill={skill} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;