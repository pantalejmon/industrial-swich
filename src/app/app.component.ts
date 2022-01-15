import {Component} from '@angular/core';
import {AxiosResponse} from 'axios';
import {IpcRenderer} from 'electron';
import {SWITCH1_INVOKED, SWITCH2_INVOKED, SWITCH_CHANNEL} from "../../model/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'industrial-switch';

  ipcRenderer: IpcRenderer;

  constructor() {
    this.ipcRenderer = window.require('electron').ipcRenderer;
  }

  async switch1() {
    const response: AxiosResponse = JSON.parse(await this.ipcRenderer.invoke(SWITCH_CHANNEL, SWITCH1_INVOKED))
    console.log(response);
  }

  switch2() {
    this.ipcRenderer.invoke(SWITCH_CHANNEL, SWITCH2_INVOKED)
  }
}
