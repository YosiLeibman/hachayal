const express = require('express')
const formidable = require('formidable')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const {JWT_SECRET,PASSWORD} =require('./config')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.get('/', function(req, res) {
	// TODO: build from ng
	// res.sendFile(__dirname + '/public/index.html');
})

// uploud file to folder
app.post('/upload',vt, function(req, res) {
	var form = new formidable.IncomingForm()

	form.parse(req)

	form.on('fileBegin', function(name, file) {
		file.path = __dirname + '/data/' + file.name
		console.log('im file begin event')
	})

	form.on('file', function(name, file) {
		console.log('Uploaded ' + file.name)
	})

	res.json({ result: 'Upload Success' })
})

app.post('/login', (req, res) => {
    const { password } = req.body
    // TODO: change it after record + dotenv
    if(password && password === PASSWORD){
        const token = jwt.sign({},JWT_SECRET, {expiresIn:'5m'})
        res.json({token})
    }else{
        res.sendStatus(401)
    }
})

function vt(req,res,next){
    if(req.headrs["token"]){
        jwt.verify(req.headrs.token, JWT_SECRET,(err,dec)=>{
            if(err){
                res.sendStatus(401)
            }else{
                next()
            }
        })
    }else{
        res.sendStatus(401)

    }
}

app.listen(1000, console.log("rock'in1000"))
