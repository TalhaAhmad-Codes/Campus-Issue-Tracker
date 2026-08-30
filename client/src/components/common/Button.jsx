const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",

  secondary:
    "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",

  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
