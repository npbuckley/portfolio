const SkillCard = ({skill}) => (
	<span key={skill} className="px-3 py-1 bg-tertiary text-slate-900 rounded-md text-sm font-medium border border-slate-900">
		{skill}
	</span>
);

export default SkillCard;