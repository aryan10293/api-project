const express = require('express')
const app = express()
app.use(express.static('public'))
const PORT = 5000

const rappers = {
    'drake': {
        'name': 'aubrey graham',
        'age': '30'
    },
    'dylan': {
        'name': 'dgderrde graham',
        'age': '30'
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName' , (req,res) => {
    const name = req.params.rapperName
    if(rappers[name]){
        res.json(rappers[name])
    }
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})