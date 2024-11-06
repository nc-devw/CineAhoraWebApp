import { RestClient } from "./rest";
import { http } from "./http";
import { Ticket } from "@/models/ticket";


export class TicketClient extends RestClient {
    public baseUrl =  `${import.meta.env.REACT_APP_API_URI}`;

    public async getTicketsByUserId(userId:number): Promise<Ticket[]> {
        const response = await http.get(this.getUrl(`/Ticket/${userId}`));
        return response.results;
    }
      
}

export const ticketClient = new TicketClient();