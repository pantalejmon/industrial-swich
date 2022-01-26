import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IpcService} from "./infrastructure/ipc.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule
  ],
  providers: [IpcService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
