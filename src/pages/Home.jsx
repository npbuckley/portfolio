import { Terminal, Mail, Download, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data/data';
import RESUME from '../files/Resume.pdf';
import SkillCard from '../components/SkillCard';

const Home = () => (
  <div className="max-w-3xl animate-fade-in">
    <div className="bg-background-light p-8 md:p-12 rounded-2xl shadow-sm border border-background-dark">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-primary text-background-light rounded-xl">
          <Terminal size={32} />
        </div>
        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
          Looking For Work
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
        Hi, I'm {SITE_DATA.name}.
      </h1>
      
      <p className="text-lg text-slate-900 leading-relaxed mb-8">
        I am a Software Engineer with expertise in full-stack development and cybersecurity. My background includes end-to-end development at Verizon, where I engineered enhancements for their legal compliance infrastructure and implemented AI-driven automation. 
        <br/><br/>
        I am the founder of Square Lion, an indie game studio where I design, develop, and launch titles on both mobile and desktop platforms. 
        <br/><br/>
        Currently completing my M.S. in Computer Science at Stevens Institute of Technology, I am seeking new opportunities to leverage my technical depth in a challenging software development role.
      </p>

      <div>
        <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
          Languages
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {SITE_DATA.skills.languages.map(skill => (<SkillCard skill={skill}/>))}
        </div>
      </div>

      <div>
        <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
          Frontend
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {SITE_DATA.skills.frontend.map(skill => (<SkillCard skill={skill}/>))}
        </div>
      </div>

      <div>
        <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
          Backend
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {SITE_DATA.skills.backend.map(skill => (<SkillCard skill={skill}/>))}
        </div>
      </div>

      <div>
        <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
          Databases
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {SITE_DATA.skills.databases.map(skill => (<SkillCard skill={skill}/>))}
        </div>
      </div>

      <div>
        <h2 className="text-md md:text-md font-extrabold text-slate-900 mb-2 leading-tight">
          Other
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {SITE_DATA.skills.other.map(skill => (<SkillCard skill={skill}/>))}
        </div>
      </div>
      

      <div className="flex gap-4">
        <a href={SITE_DATA.socials.email}>
          <button className="bg-background-dark hover:bg-background-dark/80 text-background-light px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
            Contact Me <Mail size={18} className="ml-2" />
          </button>
        </a>
        
        <a
          href={RESUME}
          download="NicholasBuckleyResume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-primary hover:bg-primary/80 text-background-light px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
            Download CV <Download size={18} className="ml-2" />
          </button>
        </a>

        <a href={SITE_DATA.socials.squarelion}>
          <button className="bg-background-dark hover:bg-background-dark/80 text-background-light px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
            Visit Square Lion <ExternalLink size={18} className="ml-2" />
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Home;