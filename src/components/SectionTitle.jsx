const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-primary">{title}</h2>
    {subtitle && <p className="text-background-dark mt-2 text-lg">{subtitle}</p>}
    <div className="h-1 w-20 bg-background-dark mt-4 rounded-full"></div>
  </div>
);

export default SectionTitle;