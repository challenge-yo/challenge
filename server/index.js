require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const {SERVER_PORT, SERVER_SECRET, SERVER_BASE } = process.env

const app = express()

app.listen( SERVER_PORT, () => console.log(`Listening on port: ${ SERVER_PORT }`) )

app.use( bodyParser.json() )

app.use( session({
    secret: SERVER_SECRET,
    resave: false,
    saveUninitialized: true
}))

massive( SERVER_BASE ).then( db => {
    app.set('db', db)
})

app.get('/api/auth', (req, res, next) => {
    if (req.session.token) {
        res.send( req.session.token )
    } else {
        res.send(false)
    }
})

app.get('/api/login/:id', (req, res) => {
    console.log( req.session.id )
        req.session.token = req.params.id
        res.send( req.session.token )
})