import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {ipcMain} from "electron";
import {SWITCH1_INVOKED, SWITCH2_INVOKED, SWITCH_CHANNEL} from "../model/constants";
import {configuration} from "./main";


export function configIpc() {
  ipcMain.handle(SWITCH_CHANNEL, async (event, arg) => handleSwitchChannel(arg));
}

async function handleSwitchChannel(arg) {
  switch (arg) {
    case SWITCH1_INVOKED:
      return sendRequest(configuration.switch1Config);
    case SWITCH2_INVOKED:
      return sendRequest(configuration.switch2Config);
  }
}

async function sendRequest(config: AxiosRequestConfig): Promise<string> {
  const response: AxiosResponse = await axios(config);
  delete response.request;

  return JSON.stringify(response);
}
