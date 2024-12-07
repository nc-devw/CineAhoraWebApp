export class RestClient {
  public baseUrl = import.meta.env.VITE_API_URI;

  public getUrl(url: string | number = "") {
    if (url) {
      return `${this.baseUrl}/${url}`;
    }

    return `${this.baseUrl}`;
  }
}
