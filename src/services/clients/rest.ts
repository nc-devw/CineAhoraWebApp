export class RestClient {
  public baseUrl = import.meta.env.VITE_URL_BACKEND;

  public getUrl(url: string | number = "") {
    if (url) {
      return `${this.baseUrl}/${url}`;
    }

    return `${this.baseUrl}`;
  }
}
