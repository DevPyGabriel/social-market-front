import AccentBtn from "../ui/AccentBtn";
import MinMaxPill from "../ui/MinMaxPill";
import PricePill from "../ui/PricePill";
import { Icons } from "../Icons";
import { Guarantee } from "../ui/Guarantee";

export const MainGrid = () => {
  const Services = [
    {
      id: 1,
      title: 'Instagram Seguidores | Estables ᴺᴱᵂ',
      description: '',
      price: '',
      quantity: '',
      min: '',
      max: '',
      guarantee: '',
      visibleGuarantee: '',
    },
  ];
  return (
    <section className="w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full flex flex-col">
          <h3 className="text-xl tracking-tight text-black dark:text-white font-semibold">
            Instagram Seguidores | Estables ᴺᴱᵂ
          </h3>
          <div className="w-full bg-card-bg dark:bg-card-dark rounded-lg px-3 py-4 mt-2">
            <div className="flex">
              <div className="px-1.5 rounded-sm bg-accent-blue flex items-center justify-center h-fit">
                <span className="text-white font-medium">0021</span>
              </div>
              <div className="-mt-1">
                <p className="text-soft-primary leading-5 font-medium tracking-tight dark:text-soft-primary-dark pl-2">
                  Instagram Seguidores | Alta Calidad | Globales | Garantia: No
                  Refill | 100K Por Dia
                </p>
              </div>
            </div>
            <div className="dark:bg-dark bg-bg w-full mt-3 rounded-md p-3 tracking-tight">
              <div className="flex-wrap flex items-center gap-x-2 gap-y-2 mb-2">
                <MinMaxPill min="100" max="1000000" />
                <PricePill price="2.00$" quantity="1000" />
              </div>
              <div className="flex items-center gap-x-2">
                <AccentBtn className="w-fit p-1 px-3 gap-x-1 font-medium">
                  <Icons.ShopCart size={13} />
                  Comprar Ahora
                </AccentBtn>
                <Guarantee guarantee={"Garantia"} visible="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainGrid;
