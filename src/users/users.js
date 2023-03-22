
const router = require('express').Router()

let list = [
	{ id: 1, name: 'Pepe', cc:'1010', status: true },
	{ id: 2, name: 'Lucas', cc:'2020', status: true },
	{ id: 3, name: 'Lupe', cc:'3030', status: true },
	{ id: 4, name: 'Sara', cc:'4040', status: true },
]

router.get('/by-name/:name', (req, res) => {
	const { name } = req.params
	let name_ = name.toLowerCase()
	let user = null, i
	for( i in list ){
		const nameAux = list[ i ].name.toLowerCase()
		if( nameAux == name_ ) user = list[ i ]
	}
	res.json({
		message: `Buscando user con Nombre = ${name}`, 
		user 
	})
})

router.get('/', (req, res) => {
	res.json({ 
		message: 'Lista de usuarios',
		users: list,
	})
})


router.get('/:id', (req, res) => {
	const { id } = req.params
	const user = list.find( el => el.id == id )
	console.log('User: ', user )
	res.json({
		message: 'User con id ' + id, 
		user,
	})
})

router.post('/', (req, res) => {
	const { id, name, cc, status } = req.body
	list.push({
		id, name, cc, status,
	})
	res.json({
		message: 'Usuario agregado',
		users: list,
	})
})

router.put('/:id', (req, res) => {
	const { id } = req.params
	const { name, cc, status } = req.body
	for( i in list ){
		if( id == list[ i ].id ){
			list[ i ] = {
				id, name, cc, status 
			}
		}
	}
	res.json({
		message: 'Usuario actualizado',
		users: list,
	})
})

router.delete('/:id', (req, res) => {
	const { id } = req.params
	const user = list.find( el => el.id == id )
	console.log(' Borrara user: ', user)
	let message = 'No se encontró el usuario a eliminar'
	if( user ){
		const idx = list.indexOf( user )
		console.log({ idx })
		if( idx != -1 ){
			message = 'Se ha borrado el usuario'
			list.splice( idx, 1 )
			// delete list[ idx ]
		}
	}
	res.json({
		message,
		users: list,
	})
})

module.exports = router