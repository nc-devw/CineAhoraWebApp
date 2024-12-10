import { Film } from "./film";
import { Seat } from "./seat";

export interface Function {
  function_id: number;
  film_id: number;
  function_date: string;
  start_time: string;
  end_time: string;
  ticket_price: number;
  seats: Seat[];
  film?: Film;
}

export type FunctionRequest = {
  film_id: number;
  schedules: string[];
  start_date: string;
  end_date: string;
};
