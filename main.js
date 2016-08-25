const electron = require('electron')

const BrowserWindow = electron.BrowserWindow
const app = electron.app

const debug = /--debug/.test(process.argv[2])

if (process.mas) app.setName('Electron APIs')

var mainWindow = null

function initialize() {

    function createWindow () {
        var windowOptions = {
            width: 400,
            minWidth: 380,
            height: 840,
            title: app.getName()
        }

        mainWindow = new BrowserWindow(windowOptions)
        mainWindow.loadURL(`file://${__dirname}/index.html`)

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow.webContents.openDevTools()
            mainWindow.maximize()
        }

        mainWindow.on('closed', function () {
            mainWindow = null
        })
        // mainWindow.webContents.openDevTools()
    }

    app.on('ready', function () {
        createWindow()
    })
}

switch (process.argv[1]) {
  case '--squirrel-install':
    autoUpdater.createShortcut(function () { app.quit() })
    break
  case '--squirrel-uninstall':
    autoUpdater.removeShortcut(function () { app.quit() })
    break
  case '--squirrel-obsolete':
  case '--squirrel-updated':
    app.quit()
    break
  default:
    initialize()
}
