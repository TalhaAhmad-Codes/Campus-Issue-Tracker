const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-lg">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
};

export default FeatureCard;
