const express = require('express')
const app = express()

const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const auth = require('./auth')
const config = require('./config')

const mysql = require('mysql');
const db = mysql.createConnection({host:'localhost',user:'root',password:'',database:'wm'});

const MongoClient = require("mongodb").MongoClient;


const mailjet = require('node-mailjet').connect('71b46f64daef6e11b4868ce7dd5a4e52', '252dfda1bd353bfa4d2bcbf8f1a26785')

try {

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, x-access-token')
    if (req.method === 'OPTIONS') {
      res.sendStatus(200)
    }
    else {
      next()
    }
  })

  app.get('/', (req, res) => {
    res.json({ type: 'success', message: 'Test OK' })

  })


  app.get('/test', (req, res) => {

    var url_bdd = "mongodb://localhost:27017"



  })

  app.use('/auth', auth({ db, express, bcrypt, jwt, config, mailjet, MongoClient}))

  app.listen(config.port)

  console.log('App is running on port: ' + config.port)
  console.log('kasheftin@gmail.com')
} catch (e) {
  process.exit(1)
}
