import { RestClient } from "./rest";
import { http } from "./http";
import { Film, FilmRequest } from "@/models";

export class MovieClient extends RestClient {
  public async getAllFilms(): Promise<Film[]> {
    const response = await http.get(this.getUrl(`films`));

    return response.responseObject;
  }

  public async getNowPlayingFilms(): Promise<Film[]> {
    const response = await http.get(this.getUrl(`films/now_playing`));

    return response.responseObject;
  }

  public async getUpcomingFilms(): Promise<Film[]> {
    const response = await http.get(this.getUrl(`films/upcoming`));

    return response.responseObject;
  }

  public async getFilmById(id?: string): Promise<Film> {
    const response = await http.get(this.getUrl(`films/${id}`));

    return response.responseObject;
  }

  public async createFilm(film: FilmRequest): Promise<any> {
    const response = await http.post(this.getUrl(`films`), film);

    return response.responseObject;
  }
}

export const movieClient = new MovieClient();
