/** @format */

const { start, end } = require('../../events/export')
const loadFfmpeg = require('./load-ffmpeg')
const createReadableVideoBuffer = require('./create-readable-video-buffer')
const { default: axios } = require('axios')

exports.createVideoFile = async function (filePath, filename) {
	const ffmpeg = loadFfmpeg()
	const readableVideoBuffer = createReadableVideoBuffer()

	await ffmpeg
		.input(readableVideoBuffer)
		.on('start', start)
		.on('progress', function (progress) {
			console.log(
				'File Path : ' +
					filePath +
					' Processing : ' +
					progress.timemark +
					' done ' +
					progress.targetSize +
					' kilobytes'
			)
		})
		.on('end', () => {
			end()
			axios
				.post('http://localhost:8080/google/upload', {
					filepath: filePath,
					filename: filename,
				})
				.then(() => {
					console.log('File Path : ' + filePath + ' Uploaded')
				})
				.catch((error) => {
					console.log(error)
				})
		})
		.output(filePath)
		.run()
}
