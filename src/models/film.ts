import { Genre } from "./genre";

export type Film = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  title: string;
  runtime: number;
  genres: Genre[];
};
