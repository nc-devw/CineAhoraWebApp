import { Film, FilmsData } from "@/models";
import { movieClient } from "./clients";

export class FilmsService {
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
}
