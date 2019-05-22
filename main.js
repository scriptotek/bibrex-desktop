const {app, BrowserWindow} = require('electron');
const path = require('path')
require('electron-debug')({
  enabled: true,
  showDevTools: false,
});

let win;

app.on('ready', () => {

  // Create the browser window.
  win = new BrowserWindow({
    width: 1250,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      // contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  
  // and load the index.html of the app.
  win.loadURL('https://bibrex.uio.no/');

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  app.quit()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
