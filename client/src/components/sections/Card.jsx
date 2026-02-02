import { Icons } from "../Icons";
import { Guarantee, PricePill, MinMaxPill, AccentBtn } from '../ui/index.js'

export const Card = () => {

  const SERVICES = [
    {
      id: 2,
      title: 'Instagram Seguidores | Estables ᴺᴱᵂ',
      description: 'Instagram Seguidores | Alta Calidad | Globales | Garantia: No Refill | 100K Por Dia',
      price: '2.00',
      quantity: '1000',
      min: '100',
      max: '200000',
      visibleGuarantee: true,
    },
    {
      id: 3,
      title: 'Instagram Seguidores | Estables ᴺᴱᵂ',
      description: 'Instagram Seguidores | Alta Calidad | Globales | Garantia: No Refill | 100K Por Dia',
      price: '2.00',
      quantity: '1000',
      min: '100',
      max: '200000',
      visibleGuarantee: true,
    },
  ]

  return (
    <>
      {SERVICES.map((service) => (
        <div key={service.id} className="w-full flex flex-col">
          <h3 className="text-xl tracking-tight text-black dark:text-white font-semibold">
            {service.title}
          </h3>
          <div className="w-full bg-card-bg dark:bg-card-dark rounded-lg px-3 py-4 mt-2">
            <div className="flex">
              <div className="px-1.5 rounded-sm bg-accent-blue flex items-center justify-center h-fit">
                <span className="text-white font-medium">00{service.id}</span>
              </div>
              <div className="-mt-1">
                <p className="text-soft-primary leading-5 font-medium tracking-tight dark:text-soft-primary-dark pl-2">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="dark:bg-dark bg-bg w-full mt-3 rounded-md p-3 tracking-tight">
              <div className="flex-wrap flex items-center gap-x-2 gap-y-2 mb-2">
                <MinMaxPill min={service.min} max={service.max} />
                <PricePill price={`${service.price}$`} quantity={service.quantity} />
              </div>
              <div className="flex items-center gap-x-2">
                <AccentBtn className="w-fit p-1 px-3 gap-x-1 font-medium">
                  <Icons.ShopCart size={13} />
                  Comprar Ahora
                </AccentBtn>
                <Guarantee visible={service.visibleGuarantee} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;