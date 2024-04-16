const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const Filestore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('layouts/main')
})

app.listen(3000, () => {
    console.log('Servidor operando na porta local: http//127.0.0.1:3000')
})