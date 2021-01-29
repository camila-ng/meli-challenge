const express = require('express');
const app = express();
const fetch   = require('node-fetch');
var cors = require("cors");
app.use(cors());

app.get('/', function (req, res) {
    var url = 'https://api.mercadolibre.com/sites/MLA/search?q=:query#json';  
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});


app.listen(3001, function(){
    console.log('express server is running on port 3001')
})
