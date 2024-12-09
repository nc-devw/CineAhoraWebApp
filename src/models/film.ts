import { Genre } from "./genre";

export type Film = {
  film_id: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  title: string;
  runtime: number;
  genres: Genre[];
  release_date: string;
  vote_average: number;
  vote_count: number;
  functions: Function[];
  is_upcoming?: boolean;
};

export type FilmRequest = {
  poster_path: string;
  backdrop_path: string;
  overview: string;
  title: string;
  runtime: number;
  genres: string[];
  release_date: string;
};

export interface FilmsData {
  nowPlaying: Film[];
  upcoming: Film[];
}

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

export interface Seat {
  seat_id: number;
  seat_number: string;
  row_identifier: string;
  row: number;
  column: number;
  isOccupied: boolean;
}
