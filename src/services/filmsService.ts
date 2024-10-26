import { Film } from "@/models";
import { movieClient } from "./clients";

class FilmsService {
  public async getFilmById(id?: string): Promise<Film> {
    const result = await movieClient.getFilmById(id);

    return result;
  }
}

export const filmsService = new FilmsService();
