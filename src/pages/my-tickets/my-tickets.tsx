import { useEffect, useState } from "react";
import { TicketCard } from '@/components/ticket-card/ticket-card';
import { TicketService } from "@/services/ticketService";
import { Ticket } from "@/models/ticket";
import { Modal } from "@/components";

export const MyTicketsPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");

  const userId = 1; //TODO: agregar la obtencion del id de usuario cuando tengamos el backend.

  const openModal = (title: string, message: string): void => {
    setModalTitle(title);
    setModalMsg(message);
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        //TODO: Replace this line with backend when el backend este hecho.
        //const userTickets = await TicketService.getTicketsByUserId(userId);
        const userTickets = await TicketService.getMockedTickets();
        setTickets(userTickets);
      } catch (error) {
        openModal("Error", "Error al cargar los tickets");
      }
    };

    fetchTickets();
  }, [userId]);

  return (
    <div className="p-9">
      <Modal
        title={modalTitle}
        message={modalMsg}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />

      <div className="flex justify-center">
        <div className="mr-32 bg-zinc-100 p-12 rounded-lg w-[400px] h-[400px] mt-20">
          <div className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-sonriente-brazos-cruzados-mirando-camara_23-2148113912.jpg"
              alt="Perfil"
              className="w-40 h-40 rounded-full mb-8"
            />
            <h2 className="text-black font-bold mb-8">Juan Perez</h2>
            <button className="w-full bg-zinc-400 text-white p-3 rounded hover:bg-zinc-700">
              Cambiar contraseña
            </button>
          </div>
        </div>

        <div className="max-w-xl">
          <h1 className="text-white font-bold mb-9 text-right text-4xl">Mis entradas</h1>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} {...ticket} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
