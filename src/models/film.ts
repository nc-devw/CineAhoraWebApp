import { Genre } from "./genre";

export type Film = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  title: string;
  runtime: number;
  genres: Genre[];
  release_date: string;
  vote_average: number;
  vote_count: number;
};

export interface FilmsData {
  nowPlaying: Film[];
  upcoming: Film[];
}
