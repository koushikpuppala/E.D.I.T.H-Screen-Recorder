/** @format */

const express = require('express')
const Google = require('./routers/google')
const config = require('../config.json')
const cors = require('cors')

const app = express()
const Host = config.Network.Host
const Port = config.Network.Port

app.use(cors())
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use('/google', Google)

app.listen(Port, Host, () => {
	console.log(`Backend Server is running on http://localhost:${Port}`)
})
