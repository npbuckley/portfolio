import { X, Code, Github, ExternalLink } from "lucide-react";
import SkillCard from "./SkillCard";

const ProjectModal = ({selectedProject, onClose}) => {
	if (!selectedProject) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in" onClick={() => onClose()}>
			<div
				className="bg-background-light w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
				onClick={e => e.stopPropagation()}
			>
				<div className="p-6 md:p-8 relative">
					<button
						onClick={() => onClose() }
						className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-900 transition-colors"
					>
						<X size={20} />
					</button>

					<div className="flex items-center space-x-4 mb-6">
						<div className="p-3 bg-secondary text-background-light rounded-xl">
							<Code size={32} />
						</div>
						<div>
							<h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
							<div className="flex space-x-3 mt-1">
								{selectedProject.github &&
									<a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center text-sm text-slate-900 hover:text-primary font-medium transition-colors">
										<Github size={16} className="mr-1" /> View Code
									</a>
								}
								{selectedProject.link &&
									<a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center text-sm text-slate-900 hover:text-primary font-medium transition-colors">
										<ExternalLink size={16} className="mr-1" /> Live Link
									</a>
								}
							</div>
						</div>
					</div>

					<div className="prose prose-slate max-w-none">
						{selectedProject.points.map((p) => <li><p className="text-lg text-slate-900 leading-relaxed mb-6">{p}</p></li>)}
					</div>

					{selectedProject.tags &&
						<div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100">
							{selectedProject.tags.map(tag => (<SkillCard skill={tag}/>))}
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;