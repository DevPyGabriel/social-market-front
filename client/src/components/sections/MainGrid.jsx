import { Card } from "." 

export const MainGrid = () => {

  return (
    <section className="w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card />
      </div>
    </section>
  );
};

export default MainGrid;

