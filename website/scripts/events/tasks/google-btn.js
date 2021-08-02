/** @format */

const { shell } = require('electron')
const axios = require('axios')

document.getElementById('googlelogin').addEventListener('click', () => {
	const GoogleBtn = document.getElementById('googlelogin')
	const GooglePic = document.getElementById('googlepic')
	axios
		.get('http://localhost:8080/google/login')
		.then((res) => {
			shell.openExternal(res.data.url)
			axios
				.get('http://localhost:8080/google')
				.then((response) => {
					GoogleBtn.innerHTML = `${response.data.name}`
					GooglePic.hidden = false
					GooglePic.classList.remove('bi')
					GooglePic.classList.remove('bi-google')
					GooglePic.src = response.data.picture
				})
				.catch((err) => {
					console.log(err)
				})
		})
		.catch((err) => {
			console.log(err)
		})
})
