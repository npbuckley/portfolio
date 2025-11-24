const SkillCard = ({skill}) => (
	<span key={skill} className="px-2 py-1 bg-tertiary text-slate-900 rounded-md text-sm font-medium">
		{skill}
	</span>
)

export default SkillCard;