const {BrowserWindow, dialog} = require('electron')

function showOpenDialog(focusedWindow, type) {
  dialog.showOpenDialog({
    multiSelections: false,
    properties: [type === 'file' ? 'openFile' : 'openDirectory']
  }).then((result) => {
    const fileInfo = {
      type: type,
      path: result.filePaths[0]
    }
    focusedWindow.webContents.send('FILE_PATH', fileInfo)
  })
}

const data = [
  {
    label: "文件 (&F)",
    submenu: [
      {
        label: "新建文件",
        accelerator: "CmdOrCtrl+N"
      },
      {
        label: "打开文件",
        accelerator: "CmdOrCtrl+O",
        click: (item, focuseWindow) => {
          showOpenDialog(focuseWindow, 'file')
        }
      },
      {
        label: "打开目录",
        accelerator: "Ctrl+Shift+O",
        click: (item, focuseWindow) => {
          showOpenDialog(focuseWindow, 'dir')
        }
      }
    ]
  },
  {
    label: 'View',
    submenu: [{
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click: (item, focusedWindow) => {
        if (focusedWindow) {
          // on reload, start fresh and close any old
          // open secondary windows
          if (focusedWindow.id === 1) {
            BrowserWindow.getAllWindows().forEach(win => {
              if (win.id > 1) win.close()
            })
          }
          focusedWindow.reload()
        }
      }
    },
      {
        label: 'Toggle Full Screen',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Ctrl+Command+F'
          } else {
            return 'F11'
          }
        })(),
        click: (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
          }
        }
      }, {
        label: 'Toggle Developer Tools',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I'
          } else {
            return 'Ctrl+Shift+I'
          }
        })(),
        click: (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.toggleDevTools()
          }
        }
      }]
  }
]
module.exports = data
