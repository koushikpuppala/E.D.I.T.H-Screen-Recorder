/** @format */

document.getElementById('stopBtn').addEventListener('click', ({ target }) => {
	const startBtn = document.getElementById('startBtn')
	const saveBtn = document.getElementById('saveBtn')
	const pauseBtn = document.getElementById('pauseBtn')
	const videoSelectBtn = document.getElementById('videoSelectBtn')

	window.mediaRecorder.stop()

	startBtn.classList.add('btn-outline-success')
	startBtn.classList.remove('btn-outline-warning')
	startBtn.classList.add('bi-play-circle')
	startBtn.classList.remove('bi-record-circle')

	startBtn.innerHTML = '&nbsp;Start Recorder'

	target.setAttribute('disabled', 'disabled')
	pauseBtn.setAttribute('hidden', 'hidden')

	startBtn.removeAttribute('disabled')
	saveBtn.removeAttribute('disabled')
	videoSelectBtn.removeAttribute('disabled')
})
