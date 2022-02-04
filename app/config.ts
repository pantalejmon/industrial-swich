import {AxiosRequestConfig} from "axios";
import {readFileSync} from "fs";
import * as path from 'path';

export class Configuraton {

  private readonly _switch1Config: AxiosRequestConfig;
  private readonly _switch2Config: AxiosRequestConfig;

  constructor() {
    const pathToConfig = process.env.PORTABLE_EXECUTABLE_DIR || '';
    const rawdata: any = readFileSync(path.join(pathToConfig, 'config.json'));
    const configuration = JSON.parse(rawdata);

    this._switch1Config = configuration['switch1'];
    this._switch2Config = configuration['switch2'];

    console.log(configuration);
  }

  get switch1Config(): AxiosRequestConfig {
    return this._switch1Config;
  }

  get switch2Config(): AxiosRequestConfig {
    return this._switch2Config;
  }
}

