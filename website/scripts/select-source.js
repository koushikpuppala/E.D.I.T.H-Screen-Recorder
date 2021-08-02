/** @format */

const { handleDataAvailable, handleStop } = require('./lib')

const videoSelectBtn = document.getElementById('videoSelectBtn')
const videoElement = document.getElementById('video')
const CameraElement = document.getElementById('audio')

module.exports = async function selectSource(source) {
	const startBtn = document.getElementById('startBtn')

	videoSelectBtn.innerHTML = `&nbsp;${source.name}`

	const constraints = {
		video: {
			mandatory: {
				chromeMediaSource: 'desktop',
				chromeMediaSourceId: source.id,
			},
		},
		audio: {
			mandatory: {
				chromeMediaSource: 'desktop',
				echoCancellation: true,
			},
		},
	}
	const constraints2 = {
		audio: {
			mandatory: {
				echoCancellation: true,
			},
		},
		video: false,
	}

	const stream = await navigator.mediaDevices.getUserMedia(constraints)
	const stream2 = await navigator.mediaDevices.getUserMedia(constraints2)

	videoElement.srcObject = stream
	CameraElement.srcObject = stream2
	videoElement.muted = true
	CameraElement.muted = false
	videoElement.play()
	CameraElement.play()
	startBtn.removeAttribute('disabled')

	const options = { mimeType: 'video/webm; codecs=vp9' }

	window.mediaRecorder = new MediaRecorder(stream, options)
	window.mediaRecorder.ondataavailable = handleDataAvailable
	window.mediaRecorder.onstop = handleStop
}
