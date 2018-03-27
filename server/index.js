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
app.get('/api/challengeByCategory/:category', function( req, res ) {
    app.get('db').select_challenges_by_category([req.params.category]).then( response => {
        res.status(200).send(response)
    })
})
app.get('/api/specificChallenge/:id', function( req, res ) {
    console.log('hit')
    app.get('db').select_specific_challenge([req.body.id]).then( response => {
        res.status(200).send(response)
    })
})


app.listen( SERVER_PORT, () => console.log(`Listening on port: ${ SERVER_PORT }`) )