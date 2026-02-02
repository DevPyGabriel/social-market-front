export const AccentBtn = ({ children , className = '' }) => {
  return (
    <a
      className={`flex items-center justify-between bg-accent-blue rounded-full text-white ${className || ''}`}
      href=""
    >
      {children}
    </a>
  );
};

export default AccentBtn;
