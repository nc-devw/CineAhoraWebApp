import { RestClient } from "./rest";
import { http } from "./http";
import { Function, FunctionRequest } from "@/models";

export class FilmFunctionClient extends RestClient {
  public async getAllFilmFunctions(): Promise<Function[]> {
    const response = await http.get(this.getUrl(`film-functions`));

    return response.responseObject;
  }

  public async createFilmFunction(film: FunctionRequest): Promise<any> {
    const response = await http.post(this.getUrl(`film-functions`), film);

    return response.responseObject;
  }

  public async deleteFilmFunction(id: number): Promise<any> {
    const response = await http.delete(this.getUrl(`film-functions/${id}`));

    return response.responseObject;
  }
}

export const filmFunctionClient = new FilmFunctionClient();
