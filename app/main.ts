import {app} from 'electron';
import {createWindow, win} from "./window";
import {configIpc} from "./ipc";
import {Configuraton} from "./config";

const args = process.argv.slice(1);

export const configuration = new Configuraton();

try {
  app.on('ready', () => setTimeout(createWindow, 400));
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

  app.on('before-quit', () => {
    win.removeAllListeners('close');
    win.close();
  });

  configIpc();
} catch (e) {
  console.error(e);
}
