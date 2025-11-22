const EducationCard = ({ edu }) => {
	if (!edu) return null;

	return (
		<div key={edu.id} className="relative pl-8">
			<div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full"></div>
			<h4 className="text-lg font-bold text-slate-800">{edu.degree}</h4>
			<div className="flex items-center text-slate-500 text-sm">
				<span className="font-medium text-primary">{edu.school}</span>
				<span className="mx-2">•</span>
				<span>{edu.period}</span>
			</div>
		</div>
	);
}

export default EducationCard;