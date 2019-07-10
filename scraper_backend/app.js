const express = require('express');
const app = express();
const cors = require('cors');

var snoowrap = require('snoowrap');

const port = 3154;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const r = new snoowrap({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    clientId: '38BBGLjgEX3i8A',
    clientSecret: '3Ji_s4lJ4RzlXSIfxngu9WvTOfk',
    refreshToken: '23280913-oFa2QT9FoJEU2mLC2r-WeyHsXN0'
  });

// for methods like getHot or getTop, returns an array of listings
// 1. receive request from front en
// 2.

app.get('/', function (req, res) {
  r.getHot()
  .then(data => {
    console.log(data);
    res.send(data);
  })
  
})

// let hotArray;
// r.getHot()
// .then(data => {
//   hotArray = data;
//   console.log(hotArray);
// });






app.listen(port, () => console.log(`Ready to get some meme reddit posts on port ${port}!`))