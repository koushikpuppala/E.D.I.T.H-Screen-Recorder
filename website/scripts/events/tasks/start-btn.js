/** @format */

document.getElementById('startBtn').addEventListener('click', ({ target }) => {
	const pauseBtn = document.getElementById('pauseBtn')
	const stopBtn = document.getElementById('stopBtn')
	const saveBtn = document.getElementById('saveBtn')
	const videoSelectBtn = document.getElementById('videoSelectBtn')

	stopBtn.removeAttribute('disabled')
	saveBtn.setAttribute('disabled', 'disabled')
	videoSelectBtn.setAttribute('disabled', 'disabled')
	target.setAttribute('disabled', 'disabled')
	pauseBtn.removeAttribute('hidden')

	window.mediaRecorder.start()

	target.classList.remove('btn-outline-success')
	target.classList.add('btn-outline-warning')
	target.classList.remove('bi-play-circle')
	target.classList.add('bi-record-circle')

	target.innerHTML = '&nbsp;Recording'
})
