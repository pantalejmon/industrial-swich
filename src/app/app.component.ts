import {Component} from '@angular/core';
import {AxiosResponse} from 'axios';
import {SWITCH1_INVOKED, SWITCH_CHANNEL} from "../../model/constants";
import {IpcService} from "./infrastructure/ipc.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ipcService: IpcService, private messageService: MessageService) {
  }

  async switch1() {
    const response: AxiosResponse = await this.ipcService.sendEventToMain(SWITCH_CHANNEL, SWITCH1_INVOKED) as AxiosResponse;
    this.showMessage(response);
  }

  async switch2() {
    const response: AxiosResponse = await this.ipcService.sendEventToMain(SWITCH_CHANNEL, SWITCH1_INVOKED) as AxiosResponse;
    this.showMessage(response);
  }

  private showMessage(response: AxiosResponse) {
    if (response.status >= 200 && response.status < 400) {
      this.messageService.add({severity: 'success', summary: response.statusText});
    } else {
      this.messageService.add({severity: 'error', summary: response.statusText});
    }
  }
}
