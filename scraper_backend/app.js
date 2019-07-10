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