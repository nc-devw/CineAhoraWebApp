import { RestClient } from "./rest";
import { http } from "./http";
import { Ticket, TicketRequest } from "@/models/ticket";

export class TicketClient extends RestClient {
  public async getTicketsByUserId(userId: number): Promise<Ticket[]> {
    const response = await http.get(this.getUrl(`tickets/user/${userId}`));
    return response.results;
  }

  public async createTicket(ticket: TicketRequest): Promise<any> {
    const response = await http.post(this.getUrl("tickets"), {
      ...ticket,
    });
    return response.results;
  }
}

export const ticketClient = new TicketClient();
