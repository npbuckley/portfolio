const ExperienceCard = ({job}) => {
	if (!job) return null;

	return (
		<div key={job.id} className="relative pl-8">
			<div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full"></div>
			<h4 className="text-lg font-bold text-slate-800">{job.role}</h4>
			<div className="flex items-center text-slate-500 text-sm mb-2">
			<span className="font-medium text-primary">{job.company}</span>
			<span className="mx-2">•</span>
			<span>{job.period}</span>
			</div>
			<p className="text-slate-700 leading-relaxed" style={{whiteSpace: "pre-wrap"}}>
			{job.description}
			</p>
		</div>
	);
}

export default ExperienceCard;