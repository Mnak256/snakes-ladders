const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/hello', (req, res) => {
    res.send({msg: 'hello world'})
})

app.listen(process.env.PORT || 5000)
