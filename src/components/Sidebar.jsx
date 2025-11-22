import { User, Code, FileText, Github, Linkedin, Mail, X, Download, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data/data';
import RESUME from '../files/Resume.pdf';

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'resume', label: 'Resume', icon: FileText },
    // { id: 'papers', label: 'Papers', icon: BookOpen },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 bg-background-dark text-slate-100 flex flex-col transition-transform duration-300 ease-in-out h-screen
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:flex-shrink-0
        `}
      >
        <div className="p-6 border-b border-background-light/30 flex items-center justify-between md:block">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">{SITE_DATA.name}</h1>
            <p className="text-sm text-slate-300 mt-1">{SITE_DATA.title}</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-300 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20' 
                    : 'text-background-light hover:bg-secondary/30 hover:text-white'
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}

          <a
            href={RESUME}
            download="NicholasBuckleyResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full bg-white text-background-dark mt-10 py-3 px-4 rounded-lg font-medium text-sm hover:bg-tertiary transition-colors flex items-center justify-center">
              <Download size={16} className="mr-2" /> Download CV
            </button>
          </a>

          <a href={SITE_DATA.socials.squarelion}>
            <button className="w-full bg-white text-background-dark mt-5 py-3 px-4 rounded-lg font-medium text-sm hover:bg-tertiary transition-colors flex items-center justify-center">
              <ExternalLink size={18} className="mr-2" /> Visit Square Lion
            </button>
          </a>
        </nav>

        <div className="p-6 border-t border-background-light/30">
          <div className="flex space-x-4 justify-center">
            <a href={SITE_DATA.socials.github} target="_blank" rel="noreferrer" className="text-background-light hover:text-white transition-colors">
              <Github size={30} />
            </a>
            <a href={SITE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-background-light hover:text-white transition-colors">
              <Linkedin size={30} />
            </a>
            <a href={SITE_DATA.socials.email} className="text-background-light hover:text-white transition-colors">
              <Mail size={30} />
            </a>
          </div>
          <p className="text-xs text-center text-background-light mt-4">
            © {new Date().getFullYear()} {SITE_DATA.name}
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;