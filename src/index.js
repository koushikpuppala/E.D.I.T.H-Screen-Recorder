/** @format */

const { app, BrowserWindow, Tray, nativeImage, Menu } = require('electron')
const path = require('path')

require('./events')

if (require('electron-squirrel-startup')) {
	app.quit()
}

let tray, mainWindow

// Menu.setApplicationMenu(null)

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 625,
		height: 556,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
		},
	})

	mainWindow.loadFile(path.resolve(__dirname, '..', 'website', 'index.html'))
	// Open the DevTools.
	mainWindow.webContents.openDevTools()
	const icon = path.join(__dirname, 'icons/logo192.png')
	// eslint-disable-next-line new-cap
	const nImage = nativeImage.createFromPath(icon)
	mainWindow.setIcon(nImage)
}

const createTray = () => {
	const icon = path.join(__dirname, 'icons/logo192.png')
	// eslint-disable-next-line new-cap
	const nImage = nativeImage.createFromPath(icon)

	tray = new Tray(nImage)
	tray.on('click', (event) => toogleWindow())
}

const toogleWindow = () => {
	mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
}

app.on('ready', createWindow, createTray)

app.whenReady().then(() => {
	createTray()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
