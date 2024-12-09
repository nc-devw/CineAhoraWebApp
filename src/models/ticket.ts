import { Customer } from "./customer";
import { Function, Seat } from "./film";

export interface Ticket {
  id: number;
  poster_path: string;
  date: string;
  time: string;
  title: string;
  seat: string;
  ticketCount: number;
  totalPrice: number;
}

export interface TicketResponse {
  ticket_id: number;
  function_id: number;
  customer_id: number;
  seat_id: number;
  purchase_date: string;
  total_price: string;
  function: Function;
  customer: Customer;
  seat: Seat;
}

export interface TicketRequest {
  customer_id: number;
  function_id: number;
  seat_id: number;
}
