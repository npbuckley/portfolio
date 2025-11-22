import { Code, Github, ExternalLink } from 'lucide-react';
import SkillCard from './SkillCard';

const ProjectCard = ({project, onOpen}) => {
	return (
		<div
			key={project.id}
			className="bg-background-light rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
			onClick={() => onOpen()}
		>
			<div className="flex justify-between items-start mb-4">
				<div className="p-2 bg-secondary text-background-light rounded-lg group-hover:bg-secondary group-hover:text-primary transition-colors">
					<Code size={24} />
				</div>
				<div className="flex space-x-3">
					{project.github &&
						<a href={project.github} className="text-background-dark hover:text-primary">
							<Github size={20} />
						</a>
					}
					{project.link &&
						<a href={project.link} className="text-background-dark hover:text-primary">
							<ExternalLink size={20} />
						</a>
					}
				</div>
			</div>

			<h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
				{project.title}
			</h3>
			<p className="text-slate-900 h-18 overflow-hidden">
				{project.summary}
			</p>
			<p className="text-slate-500 text-sm mt-1 mb-2">
				Click to read more
			</p>

			<div className="flex flex-wrap gap-2 mt-auto">
				{project.tags.map(tag => (<SkillCard skill={tag}/>))}
			</div>
		</div>
	);
}

export default ProjectCard;