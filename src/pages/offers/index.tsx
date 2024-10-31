import { OfferCard } from "@/components";
import { Offer1, Offer2, Offer3 } from "@/assets";
export const Offers: React.FC = () => {
  const offers = [
    {
      image: Offer1,
      title: "50% Off en Entradas Blockbuster",
      description: "Disfruta de un 50% de descuento en todas las entradas blockbuster. Oferta válida hasta fin de mes.",
      buttonText: "Reservar Ahora"
    },
    {
      image: Offer2,
      title: "Pochoclo Gratis con Cada Entrada",
      description: "Pochoclo gratis con cada entrada de película. Oferta válida solo los fines de semana.",
      buttonText: "Más Información"
    },
    {
      image: Offer3,
      title: "Proyección Especial de Clásicos",
      description: "Únete a una proyección especial de películas clásicas todos los jueves. ¡Entradas a mitad de precio!",
      buttonText: "Reserva tu Lugar"
    },
    {
      image: Offer3,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "50% Off en Entradas Blockbuster",
      description: "Disfruta de un 50% de descuento en todas las entradas blockbuster. Oferta válida hasta fin de mes.",
      buttonText: "Reservar Ahora"
    },
    {
      image: Offer2,
      title: "Pochoclo Gratis con Cada Entrada",
      description: "Pochoclo gratis con cada entrada de película. Oferta válida solo los fines de semana.",
      buttonText: "Más Información"
    },
    {
      image: Offer3,
      title: "Proyección Especial de Clásicos",
      description: "Únete a una proyección especial de películas clásicas todos los jueves. ¡Entradas a mitad de precio!",
      buttonText: "Reserva tu Lugar"
    },
    {
      image: Offer3,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Pochoclo Gratis con Cada Entrada",
      description: "Pochoclo gratis con cada entrada de película. Oferta válida solo los fines de semana.",
      buttonText: "Más Información"
    },
    {
      image: Offer3,
      title: "Proyección Especial de Clásicos",
      description: "Únete a una proyección especial de películas clásicas todos los jueves. ¡Entradas a mitad de precio!",
      buttonText: "Reserva tu Lugar"
    },
    {
      image: Offer3,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "50% Off en Entradas Blockbuster",
      description: "Disfruta de un 50% de descuento en todas las entradas blockbuster. Oferta válida hasta fin de mes.",
      buttonText: "Reservar Ahora"
    },
    {
      image: Offer2,
      title: "Pochoclo Gratis con Cada Entrada",
      description: "Pochoclo gratis con cada entrada de película. Oferta válida solo los fines de semana.",
      buttonText: "Más Información"
    },
    {
      image: Offer3,
      title: "Proyección Especial de Clásicos",
      description: "Únete a una proyección especial de películas clásicas todos los jueves. ¡Entradas a mitad de precio!",
      buttonText: "Reserva tu Lugar"
    },
    {
      image: Offer3,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer2,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    },
    {
      image: Offer1,
      title: "Ofertas de Paquete Familiar",
      description: "Disfruta de una noche perfecta con nuestras ofertas de paquete familiar. Incluye snacks y bebidas para todos.",
      buttonText: "Obtener Oferta"
    }
  ];
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Ofertas Exclusivas de Cine
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            image={offer.image}
            title={offer.title}
            description={offer.description}
            buttonText={offer.buttonText}
            onButtonClick={() => console.log(`Clicked offer: ${offer.title}`)}
          />
        ))}
      </div>
    </div>
  );
};