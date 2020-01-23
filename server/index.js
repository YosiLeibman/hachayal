const express = require('express')
const formidable = require('formidable')

const app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
	// TODO: build from ng
	// res.sendFile(__dirname + '/public/index.html');
})

app.post('/upload', function(req, res) {
	var form = new formidable.IncomingForm()

	form.parse(req)

	form.on('fileBegin', function(name, file) {
        file.path = __dirname + '/data/' + file.name
        console.log("im file begin event");
	})

	form.on('file', function(name, file) {
		console.log('Uploaded ' + file.name)
	})

	res.json({ result: 'Upload Success' })
})

app.listen(1000, console.log("rock'in1000"))
