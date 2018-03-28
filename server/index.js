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
    app.get('db').select_specific_challenge([req.params.id]).then( response => {
        res.status(200).send(response)
    })
})

app.get('/api/friends', function(req, res){
    app.get('db').get_friends().then( response => {
        res.status(200).send(response)
    })
})

app.get('/api/confirm', function(req, res){
    app.get('db').confirm_needed().then( response => {
        res.status(200).send(response)
    })
})

app.post('/api/addfriend', function (req, res){
    app.get('db').add_friends([req.body.id, req.body.id2]).then(response => {
        res.status(200).send(response) 
    })
})

app.post('/api/confirmfriend', function (req, res){
    app.get('db').confirm_friends([req.body.id, req.body.id2]).then(response => {
        res.status(200).send(response) 
    })
})

app.post('/api/declinefriend', function (req, res){
    app.get('db').decline_friends([req.body.id, req.body.id2]).then(response => {
        res.status(200).send(response) 
    })
})

app.post('/api/getprofile', function (req, res){
    app.get('db').get_profile([req.body.facebook]).then(response => {
        res.status(200).send(response) 
    })
})


app.get('/api/user', function(req, res) {
    req.session.profile ? res.send( true ) : res.send( null )
})

app.post('/api/login/', function(req, res) {
    req.session.profile = req.body.profile
    console.log( req.session.profile)
    res.send( true )
})

app.post('/api/newuser', function(req, res) {
    app.get('db').create_user([req.body.profile.sub, req.body.profile.nickname, req.body.profile.given_name, req.body.profile.family_name, req.body.profile.picture, req.body.profile.email, req.body.profile.sub]).then( resp => {
        res.status(200).send(resp)
    })
})

app.listen( SERVER_PORT, () => console.log(`Listening on port: ${ SERVER_PORT }`) )
