/* eslint-disable @typescript-eslint/no-explicit-any */
import { sleep } from "@/utils";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type Data = Record<string, any>;

export class Http {
  public isInternetReachable = true;
  private waitForConnectionPromise: Promise<void> | undefined;

  public constructor() {
    this.initAuth();
  }

  public async initAuth() {
    const token = import.meta.env.VITE_MOVIE_TOKEN;
    this.setAuth(token);
  }

  public setAuth(token: string) {
    axios.defaults.headers.common.Authorization = token
      ? `Bearer ${token}`
      : "";
  }

  public async waitForConnection(maxRetries = 10) {
    if (this.isInternetReachable) {
      return;
    }

    if (this.waitForConnectionPromise) {
      return this.waitForConnectionPromise;
    }

    for (let index = 0; index <= maxRetries; index++) {
      this.waitForConnectionPromise = sleep(1000);

      await this.waitForConnectionPromise;

      this.waitForConnectionPromise = undefined;

      if (this.isInternetReachable) {
        return;
      }
    }
  }

  public async get(path: string, options: AxiosRequestConfig = {}) {
    await this.waitForConnection().catch();

    return axios.get(path, options).then(this.mapData).catch(this.handleError);
  }

  public async post(
    path: string,
    data?: Data,
    options: AxiosRequestConfig = {}
  ) {
    await this.waitForConnection().catch();

    return axios
      .post(path, data, options)
      .then(this.mapData)
      .catch(this.handleError);
  }

  public async put(
    path: string,
    data?: Data,
    options: AxiosRequestConfig = {}
  ) {
    await this.waitForConnection().catch();

    return axios
      .put(path, data, options)
      .then(this.mapData)
      .catch(this.handleError);
  }

  public async patch(
    path: string,
    data?: Data,
    options: AxiosRequestConfig = {}
  ) {
    await this.waitForConnection().catch();

    return axios
      .patch(path, data, options)
      .then(this.mapData)
      .catch(this.handleError);
  }

  public async delete(path: string, options: AxiosRequestConfig = {}) {
    await this.waitForConnection().catch();

    return axios
      .delete(path, options)
      .then(this.mapData)
      .catch(this.handleError);
  }

  private mapData = (result: AxiosResponse<any>) => {
    const hasErrors = result?.data?.errors?.length > 0;

    if (hasErrors) {
      this.handleError(result?.data?.errors[0]);
    }
    return result.data;
  };

  private handleError = (error: AxiosError<any>) => {
    throw error;
  };
}

export const http = new Http();
