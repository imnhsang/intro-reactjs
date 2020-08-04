const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const admin = require('firebase-admin')
admin.initializeApp()

const app = express()

app.use((req, res, next) => {
	// Website you wish to allow to connect
	const allowedOrigins = [
		'http://localhost:3000',
	]
	const origin = req.headers.origin
	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin)
	}

	// Request methods you wish to allow
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	)

	// Request headers you wish to allow
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true)

	// Pass to next layer of middleware
	next()
})

app.post('/', async (req, res) => {
	const todo = req.body
	await admin.firestore().collection('notes').add(todo)

	res.status(201).send('Created successfully!!!')
})

app.get('/:uid', async (req, res) => {
	const uid = req.params

	const snapshot = await admin
		.firestore()
		.collection('notes')
		.where('uid', '==', uid.uid)
		.get()

	let notes = []
	snapshot.forEach((doc) => {
		let id = doc.id
		let data = doc.data()

		notes.push({ id, ...data })
	})


	res.status(200).send(notes)
})

exports.note = functions.https.onRequest(app)
