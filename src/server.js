
/**
 * npm init
 * npm install --save express
 * npm i -D nodemon
 */

const express = require('express') //llamamos a Express
const app = express()            

//const port = process.env.PORT || 8080
const port = 3003

app.use( express.urlencoded({extended:false}) )
app.use(express.json())

const router = require('./routes/routes')
app.use('/test', router)


app.listen(port, function () {
	console.log(`Servidor corriendo en el puerto: ${port}`);
})
