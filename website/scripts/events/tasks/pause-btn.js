/** @format */

document.getElementById('pauseBtn').addEventListener('click', ({ target }) => {
	const startBtn = document.getElementById('startBtn')
	if (window.mediaRecorder.state === 'recording') {
		startBtn.innerHTML = '&nbsp;Recording Paused'
		target.innerHTML = '&nbsp;Resume'
		target.classList.add('bi-play-circle')
		target.classList.remove('bi-pause-circle')
		window.mediaRecorder.pause()
		// recording paused
	} else if (window.mediaRecorder.state === 'paused') {
		startBtn.innerHTML = '&nbsp;Recording'
		target.innerHTML = '&nbsp;Pause'
		target.classList.remove('bi-play-circle')
		target.classList.add('bi-pause-circle')
		window.mediaRecorder.resume()
		// resume recording
	}
})
