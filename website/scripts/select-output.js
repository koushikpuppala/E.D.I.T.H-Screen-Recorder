/** @format */

const { dialog } = require('electron').remote
const { createVideoFile } = require('./lib')
const videoElement = document.getElementById('video')
const videoSelectBtn = document.getElementById('videoSelectBtn')
const saveBtn = document.getElementById('saveBtn')
const CameraElement = document.getElementById('audio')

async function exportVideo(ext) {
	const filename = `vid-${Date.now()}.${ext}`
	const { filePath } = await dialog.showSaveDialog({
		buttonLabel: 'Save video',
		defaultPath: `${filename}`,
	})

	if (filePath) {
		await createVideoFile(filePath, filename)
		videoElement.srcObject = null
		videoSelectBtn.textContent = 'Choose a Video Source'
		saveBtn.setAttribute('disabled', 'disabled')
		CameraElement.muted = true
	}
}

module.exports = async function selectSource({ id }) {
	await exportVideo(id)
}
