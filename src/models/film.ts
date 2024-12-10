import { Function } from "./function";
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
