/** @format */

const router = require('express').Router()
const config = require('../../config.json')
const fs = require('fs')

const { google } = require('googleapis')

const CLIENT_ID = config.Google.Client_Id
const CLIENT_SECRET = config.Google.Client_Secret
const REDIRECT_URL = config.Google.Redirect_Uris[0]

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

const SCOPES =
	'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile'

router.get('/', (req, res) => {
	var oauth2 = google.oauth2({
		auth: oAuth2Client,
		version: 'v2',
	})
	oauth2.userinfo.get(function (err, response) {
		if (err) {
			console.log(err)
		} else {
			console.log(response.data)
			var name = response.data.name
			var picture = response.data.picture
			res.send({
				name: name,
				picture: picture,
			})
		}
	})
})

router.get('/login', (req, res) => {
	// Generate an OAuth URL and redirect there
	var url = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	})
	res.send({
		url: url,
	})
})

router.get('/callback', (req, res) => {
	const code = req.query.code
	if (code) {
		// Get an access token based on our OAuth code
		oAuth2Client.getToken(code, function (err, tokens) {
			if (err) {
				console.log('Error authenticating')
				console.log(err)
			} else {
				console.log('Successfully authenticated')
				console.log(tokens)
				oAuth2Client.setCredentials(tokens)

				res.redirect('/google')
			}
		})
	}
})

router.post('/upload', (req, res) => {
	var FilePath = req.body.filepath
	var FileName = req.body.filename

	var Media = {
		mimeType: 'video/webm; codecs=vp9',
		body: fs.createReadStream(FilePath),
	}

	var FileData = {
		name: FileName,
	}

	const drive = google.drive({ version: 'v3', auth: oAuth2Client })
	drive.files.create(
		{
			resource: FileData,
			media: Media,
			fields: 'id',
		},
		function (err, file) {
			if (err) {
				// Handle error
				console.error(err)
			} else {
				//console.log('File Id: ', file.id);
				console.log('Upload successful.  File Id: ', file.data.id)
			}
		}
	)
})

module.exports = router
