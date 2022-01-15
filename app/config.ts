import {AxiosRequestConfig} from "axios";
import {readFileSync} from "fs";

export class Configuraton {
  constructor() {
    let rawdata: any = readFileSync('config.json');
    let configuration = JSON.parse(rawdata);

    this._switch1Config = configuration['switch1'];
    this._switch2Config = configuration['switch2'];

    console.log(configuration);
  }

  private _switch1Config: AxiosRequestConfig;

  get switch1Config(): AxiosRequestConfig {
    return this._switch1Config;
  }

  private _switch2Config: AxiosRequestConfig;

  get switch2Config(): AxiosRequestConfig {
    return this._switch2Config;
  }
}

