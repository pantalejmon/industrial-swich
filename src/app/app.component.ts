import {Component} from '@angular/core';
import {IpcRenderer} from 'electron';

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

  switch1() {
    this.ipcRenderer.send('switch1')
  }

  switch2() {
    this.ipcRenderer.send('switch2')
  }
}
