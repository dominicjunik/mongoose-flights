const express = require('express')

require('dotenv').config()

const mongoConfig = require('./config')

const app = express()

const PORT = 8082;

mongoConfig()
const flightsRoutes = require('./routes/flightsRoutes')

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.urlencoded({ extended: true }))

// routes
app.use('/flights', flightsRoutes)

// "root" route         
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
})