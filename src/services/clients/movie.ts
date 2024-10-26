import { RestClient } from "./rest";
import { http } from "./http";
import { Film } from "@/models";

export class MovieClient extends RestClient {
  public baseUrl = "https://api.themoviedb.org/3/movie";

  public async getNowPlayingFilms(): Promise<Film[]> {
    const response = await http.get(this.getUrl(`/now_playing`), {
      params: {
        language: "es-AR",
      },
    });

    return response.results;
  }

  public async getUpcomingFilms(): Promise<Film[]> {
    const response = await http.get(this.getUrl(`/upcoming`), {
      params: {
        language: "es-AR",
      },
    });

    return response.results;
  }

  public async getFilmById(id?: string): Promise<Film> {
    const response = await http.get(this.getUrl(`/${id}`), {
      params: {
        language: "es-AR",
      },
    });

    return response;
  }
}

export const movieClient = new MovieClient();
