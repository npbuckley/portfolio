import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModel';
import { PROJECTS } from '../data/data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Main Content */}
      <div className="animate-fade-in">
        <SectionTitle title="Projects"/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(p => (<ProjectCard key={p.id} project={p} onOpen={() => setSelectedProject(p)}/>))}
        </div>
      </div>

      {/* Model */}
      <ProjectModal selectedProject={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

export default Projects;