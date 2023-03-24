/**
 * npm init
 * npm install --save express
 * npm i -D nodemon
 * npm i dotenv
 */
require('dotenv').config()

const express = require('express') //llamamos a Express
const app = express()            

app.use( express.urlencoded({extended:false}) )
app.use(express.json())

const router = require('./routes/routes')
app.use('/test', router)

const envi = process.env.NODE_ENV
const conf = {
	dev: { port: process.env.PORT_DEV },
	qa: { port: process.env.PORT_QA },
	prod: { port: process.env.PORT_PROD },
}
const port = conf[envi].port

app.listen(port, function () {
	console.log(`Servidor corriendo en el puerto: ${port}`);
	console.log(`---> ENV: ${envi}`);
	console.log(`---> ENV puerto: ${port}`);
})
