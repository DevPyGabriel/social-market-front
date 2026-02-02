import { Icons } from "../Icons";

export const Guarantee = ({ guarantee, visible = true }) => {
  if (!visible) return null;

  return (
    <div className="w-fit p-1 px-3 gap-x-1 font-medium flex items-center text-green-400 dark:bg-green-900/40 bg-green-900 rounded-full">
      <Icons.Guarantee size={16} />
      {guarantee}
    </div>
  );
};

export default Guarantee;
    