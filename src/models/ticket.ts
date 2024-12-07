export interface Ticket {
  id: number;
  poster_path: string;
  date: string;
  time: string;
  title: string;
  ticketCount: number;
  totalPrice: number;
}

export interface TicketRequest {
  customer_id: number;
  function_id: number;
  seat_id: number;
}
