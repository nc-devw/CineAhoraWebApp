import { Ticket, TicketRequest } from "@/models/ticket";
import { ticketClient } from "./clients/ticket";

export class TicketService {
  public static async getTicketsByUserId(userId: number): Promise<Ticket[]> {
    const result = await ticketClient.getTicketsByUserId(userId);
    return result;
  }

  public static async createTicket(ticket: TicketRequest): Promise<any> {
    const result = await ticketClient.createTicket(ticket);
    return result;
  }

  //TODO: Delete when terminemos el backend
  public static async getMockedTickets(): Promise<Ticket[]> {
    const tickets = [
      {
        id: 1,
        poster_path:
          "https://image.tmdb.org/t/p/w500/oY9SRUcRqdrjyINFoGewobSP7FB.jpg",
        date: "JUNIO 7",
        time: "07:00 PM",
        title: "La trampa",
        ticketCount: 1,
        totalPrice: 2500,
      },
      {
        id: 2,
        poster_path:
          "https://image.tmdb.org/t/p/w500/1UHp2QEBPnTrcx0i6aYw6jWtDbI.jpg",
        date: "JUNIO 7",
        time: "07:00 PM",
        title: "El sindicato",
        ticketCount: 1,
        totalPrice: 2500,
      },
      {
        id: 3,
        poster_path:
          "https://image.tmdb.org/t/p/w500/2N5c3ue4bxvTO5OO3bOjHPJZs3H.jpg",
        date: "JUNIO 8",
        time: "08:30 PM",
        title: "Beetlejuice 2",
        ticketCount: 2,
        totalPrice: 5000,
      },
      {
        id: 4,
        poster_path:
          "https://image.tmdb.org/t/p/w500/n3JeGELHa9V6k9mL81ItMxWLSS6.jpg",
        date: "JUNIO 8",
        time: "09:00 PM",
        title: "Dune 2",
        ticketCount: 3,
        totalPrice: 7500,
      },
    ];
    return tickets;
  }
}
