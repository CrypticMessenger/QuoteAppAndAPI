var express = require('express');
var bodyParser = require('body-parser');
var quotes = require('./quotes.json');
var app = express();
app.listen(3000,()=> console.log('listening at port 3000'));
app.use(express.static('public'));
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

app.get('/quote',(req,res)=>{
    const rand_quote = getRandomIntInclusive(1,quotes['quotes'].length -1);
    const data = quotes['quotes'][rand_quote];
    res.json({"quote":data});
})

app.get('/quote/:num',(req,res)=>{
    const data = [];
    for(var i=0;i< parseInt(req.params.num);i++){
        const rand_quote = getRandomIntInclusive(1,quotes['quotes'].length -1);
        data.push(quotes['quotes'][rand_quote]);
    }
    res.json({"quotes":data});
})
