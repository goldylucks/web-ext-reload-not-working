/* eslint-disable no-console */

const logger = Object.freeze({
	log,
	info,
	warn,
	error,
	errorEnriched,
})

export default logger

function log(...msgs) {
	console.log(...msgs)
}

function info(msgs) {
	console.info(...msgs)
}

function warn(...msgs) {
	console.warn(...msgs)
}

function error(...msgs) {
	console.error(...msgs)
}

function errorEnriched(_error, ...msgs) {
	logger.error(["Error", ...msgs, _error.stack].join("\n"))
}
