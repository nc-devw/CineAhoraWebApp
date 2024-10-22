import { Genre } from "./genre";

export type Film = {
    id: number;
    data: {
      poster_path: string;
      backdrop_path: string;
      overview: string;
      title: string;
      runtime: number;
      genres: Genre[];
    }
  };
  
