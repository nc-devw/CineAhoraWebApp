import { Ticket, TicketRequest } from "@/models/ticket";
import { ticketClient } from "./clients/ticket";

export class TicketService {
  public static async getTicketsByUserId(userId: string): Promise<Ticket[]> {
    const result = await ticketClient.getTicketsByUserId(userId);
    const tickets = result.map((ticket) => ({
      id: ticket.ticket_id,
      poster_path: ticket.function.film?.poster_path ?? "",
      date: ticket.function.function_date,
      time: ticket.function.start_time,
      seat: ticket.seat.seat_number,
      title: ticket.function.film?.title ?? "",
      ticketCount: 0,
      totalPrice: parseFloat(ticket.total_price),
    }));

    return tickets;
  }

  public static async createTicket(ticket: TicketRequest): Promise<any> {
    const result = await ticketClient.createTicket(ticket);
    return result;
  }
}
