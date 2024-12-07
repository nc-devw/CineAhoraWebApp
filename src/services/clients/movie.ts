import { RestClient } from "./rest";
import { http } from "./http";
import { Film } from "@/models";

export class MovieClient extends RestClient {
  public async getNowPlayingFilms(): Promise<Film[]> {
    const response = await http.get(this.getUrl(`films/now_playing`), {
      params: {
        language: "es-AR",
      },
    });

    return response.responseObject;
  }

  public async getUpcomingFilms(): Promise<Film[]> {
    const response = await http.get(this.getUrl(`films/upcoming`), {
      params: {
        language: "es-AR",
      },
    });

    return response.responseObject;
  }

  public async getFilmById(id?: string): Promise<Film> {
    const response = await http.get(this.getUrl(`films/${id}`), {
      params: {
        language: "es-AR",
      },
    });

    return response.responseObject;
  }
}

export const movieClient = new MovieClient();
