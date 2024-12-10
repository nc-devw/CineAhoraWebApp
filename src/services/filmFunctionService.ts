import { Function, FunctionRequest } from "@/models/function";
import { filmFunctionClient } from "@/services/clients";

export class FilmFunctionService {
  public static async getAllFilmFunctions(): Promise<Function[]> {
    const films = await filmFunctionClient.getAllFilmFunctions();

    return films;
  }

  public static async createFilmFunction(film: FunctionRequest): Promise<any> {
    const result = await filmFunctionClient.createFilmFunction(film);
    return result;
  }

  public static async deleteFilmFunction(id: number): Promise<any> {
    const result = await filmFunctionClient.deleteFilmFunction(id);
    return result;
  }
}
