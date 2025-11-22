import { useState } from 'react';
import { Menu } from 'lucide-react';
import { SITE_DATA } from './data/data';

// Import Components
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
// import Papers from './pages/Papers';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'projects': return <Projects />;
      case 'resume': return <Resume />;
      // case 'papers': return <Papers />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-background-dark text-white z-20 px-4 py-3 flex items-center justify-between shadow-md">
        <span className="font-bold text-lg">{SITE_DATA.name}</span>
        <button onClick={() => setIsMobileNavOpen(true)} className="text-background-light hover:text-secondary">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isMobileNavOpen} 
        setIsOpen={setIsMobileNavOpen} 
      />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-0 transition-all duration-300 pt-16 md:pt-0 h-screen overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16 min-h-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;