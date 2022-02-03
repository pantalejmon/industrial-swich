import {AxiosRequestConfig} from "axios";
import {readFileSync} from "fs";
import * as path from 'path';

export class Configuraton {
  constructor() {

    let rawdata: any = readFileSync(path.join(process.env.PORTABLE_EXECUTABLE_DIR, 'config.json'));
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

