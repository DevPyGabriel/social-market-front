import { Icons } from "../Icons";

export const Searchbar = () => {
  return (
    <div className="flex items-center bg-item-bg dark:bg-card-dark w-fit gap-x-2 rounded-full pl-1 pr-3 py-1">
      <button
        className="flex items-center justify-center h-8 w-8 rounded-full bg-bg dark:bg-dark dark:text-white cursor-pointer"
        href=""
      >
        <Icons.Search />
      </button>
      <input
        type="search"
        name="busqueda"
        id="search"
        placeholder="Buscar categoria"
        required
        className="placeholder:text-soft-primary placeholder:tracking-tight p-0.5 rounded-full focus:outline-none searchbar-icon dark:placeholder:text-soft-primary text-soft-primary"
      />
    </div>
  );
};

export default Searchbar;
