import { Film, FilmRequest, FilmsData } from "@/models";
import { movieClient } from "./clients";

export class FilmsService {
  public static async getAllFilms(): Promise<Film[]> {
    const films = await movieClient.getAllFilms();

    return films;
  }

  public static async getFilms(): Promise<FilmsData> {
    const nowPlaying = await movieClient.getNowPlayingFilms();
    const upcoming = await movieClient.getUpcomingFilms();

    return {
      nowPlaying: nowPlaying,
      upcoming: upcoming,
    };
  }

  public static async getFilmById(id?: string): Promise<Film> {
    const result = await movieClient.getFilmById(id);
    return result;
  }

  public static async createFilm(film: FilmRequest): Promise<any> {
    const result = await movieClient.createFilm(film);
    return result;
  }
}
