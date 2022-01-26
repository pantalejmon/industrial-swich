import {Injectable} from '@angular/core';
import {IpcRenderer} from "electron";

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  ipcRenderer: IpcRenderer;

  constructor() {
    this.ipcRenderer = (<any>window).require('electron').ipcRenderer;
  }

  async sendEventToMain(channel: string, message: string): Promise<any> {
    return JSON.parse(await this.ipcRenderer.invoke(channel, message))
  }
}
