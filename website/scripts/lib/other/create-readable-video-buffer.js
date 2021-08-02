/** @format */

const stream = require('stream')

module.exports = function createReadableVideoBuffer() {
	const readableVideoBuffer = new stream.PassThrough()

	readableVideoBuffer.write(window.videoBuffer)
	readableVideoBuffer.end()

	return readableVideoBuffer
}
