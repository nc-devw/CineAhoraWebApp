import { Offer } from "@/models/offers";

interface OfferCardProps extends Offer {
  onButtonClick?: () => void;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
}) => (
  <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <button 
        onClick={onButtonClick}
        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
      >
        {buttonText}
      </button>
    </div>
  </div>
);