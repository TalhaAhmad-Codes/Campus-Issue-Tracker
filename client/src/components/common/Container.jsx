const Container = ({ children, className = "" }) => {
  return <div className={`container-app ${className}`}>{children}</div>;
};

export default Container;
