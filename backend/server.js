const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require('cors');
const bodyParser = require('body-parser');



const connectDB = require('./config/db')


const port = process.env.PORT || 5000

connectDB()
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors());
app.use('/api/users' , require('./routes/userRoutes'))
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log(`server started on port ${port}`))