const express = require('express')
const path = require('path')
const app = express();


app.listen(process.env.PORT || 3000, () => console.log("Hola"));


app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.use('/public/', express.static(__dirname + '/public/'))