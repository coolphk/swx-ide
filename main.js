  const urlLocation = "http://localhost:8080"
  const {app, BrowserWindow, Menu} = require('electron');
  // const menuConfig = require('./src/main/menu');
  const menuConfig = require('./src/main/menu');
  let mainWindow;

  app.on("ready", () => {
    mainWindow = new BrowserWindow({
      width: 1024,
      height: 680,
      webPreferences: {
        nodeIntegration: true
      }
    })
    const menu = Menu.buildFromTemplate(menuConfig)
    Menu.setApplicationMenu(menu)
    mainWindow.loadURL(urlLocation)
})
