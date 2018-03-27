require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const {SERVER_PORT, SERVER_SECRET, SERVER_BASE } = process.env

const app = express()

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

app.get('/api/challenges', function(req, res){
    app.get('db').get_challenges().then( response => {
        res.status(200).send(response)
    })
})
app.get('/api/categories', function(req, res){
    app.get('db').get_categories().then( response => {
        res.status(200).send(response)
    })
})

app.listen( SERVER_PORT, () => console.log(`Listening on port: ${ SERVER_PORT }`) )
