export const SearchSection = ({ children, className = "" }) => {
  return (
    <section className={`mx-auto w-full px-2 sm:px-3 py-4 flex items-center gap-x-2 ${className}`}>
      {children}
    </section>
  );
};