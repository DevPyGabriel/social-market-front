export const PricePill = ({ price = "N/A" , quantity = "N/A"}) => {
  return (
    <div className="flex flex-wrap items-center gap-x-2">
      <div className="flex items-center font-medium text-black dark:text-white">
        <div className="rounded-l-full ring ring-inset ring-black dark:ring-white p-1 pl-2 pr-1.5">
          <span>{(price)}</span>
        </div>
        <div className="rounded-r-full dark:bg-white bg-black text-white dark:text-black p-1 pr-2">
          <span>C/ {(quantity)}</span>
        </div>
      </div>
    </div>
  );
};

export default PricePill;