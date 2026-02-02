import { Icons } from "../Icons";

export const HeroHeading = () => {
  return (
    <section className="pt-24 sm:pt-28 px-3">
      <div className="flex flex-col gap-y-1 xs:gap-y-3">
        <h1 className="font-semibold text-4xl 2xs:text-[38px] xs:text-5xl tracking-tighter text-dark dark:text-white">
          Servicios Disponibles
        </h1>
        <p className="w-full 2xs:w-85 leading-4.5 tracking-tight text-soft-primary">
          estos son los servicios que ofrecemos al mejor precio !
        </p>
      </div>
    </section>
  );
};

export default HeroHeading;
