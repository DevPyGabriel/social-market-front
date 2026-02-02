import { Icons } from "../Icons";

export const MinMaxPill = ({ min = "N/A", max = "N/A" }) => {
  const formatter = (value) => {
    if (value === null || value === undefined) return "N/A";
    // keep strings like "N/A"
    if (typeof value === 'string') {
      const parsed = Number(value.replace(/,/g, ''));
      if (!Number.isFinite(parsed)) return value;
      value = parsed;
    }
    const n = Number(value);
    if (!Number.isFinite(n)) return String(value);

    const abs = Math.abs(n);
    // Millions
    if (abs >= 1_000_000) {
      const millions = n / 1_000_000;
      const rounded = Math.round(millions * 10) / 10; // 1 decimal max
      const text = rounded % 1 === 0 ? String(Math.trunc(rounded)) : String(rounded);
      return `${text} ${Math.abs(rounded) === 1 ? 'Millon' : 'Millones'}`;
    }

    // Thousands -> K
    if (abs >= 1000) {
      const thousands = n / 1000;
      const rounded = Math.round(thousands * 10) / 10;
      const text = rounded % 1 === 0 ? String(Math.trunc(rounded)) : String(rounded);
      return `${text}K`;
    }

    return String(n);
  };

  return (
    <div className="flex flex-wrap items-center gap-x-2">
      <div className="flex items-center font-medium text-black dark:text-white ">
        <div className="rounded-l-full ring ring-inset ring-black dark:ring-white p-1 pl-2 flex items-center justify-center gap-x-1">
          <Icons.Arrow />
          <span>Min: {formatter(min)}</span>
        </div>
        <div className="rounded-r-full bg-black dark:bg-white dark:text-black text-white p-1 pr-2 font-semibold flex items-center justify-center gap-x-1">
          <Icons.Arrow className="rotate-180 mb-1" />
          <span>Max: {formatter(max)}</span>
        </div>
      </div>
    </div>
  );
};

export default MinMaxPill;
