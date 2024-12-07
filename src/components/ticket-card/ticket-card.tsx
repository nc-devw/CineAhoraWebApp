import { Ticket } from "@/models/ticket";

export const TicketCard: React.FC<Ticket> = ({
  poster_path,
  date,
  seat,
  time,
  title,
  totalPrice,
}) => {
  return (
    <div className="bg-gray-100 rounded flex shadow">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="w-64 h-48 object-cover"
      />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <p className="text-gray-500 mb-2">
            {date} | {time}
          </p>
          <h3 className="text-gray-800 font-bold text-2xl">{title}</h3>
          <p className="text-gray-500 mb-2">Asiento: {seat}</p>
        </div>
        <p className="text-gray-500">${totalPrice}</p>
      </div>
    </div>
  );
};
