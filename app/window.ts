import {BrowserWindow, screen} from "electron";
import {existsSync} from "fs";
import * as path from "path";
import * as url from "url";

export let win: BrowserWindow = null;

export function createWindow(): BrowserWindow {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    autoHideMenuBar: true,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  let pathIndex = '../index.html';
  if (existsSync(path.join(__dirname, '../dist/index.html'))) {
    pathIndex = '../dist/index.html';
  }

  win.loadURL(url.format({
    pathname: path.join(__dirname, pathIndex),
    protocol: 'file:',
    slashes: true
  }));


  win.on('closed', () => {
    win = null;
  });

  return win;
}
