var snoowrap = require('snoowrap');



let hotArray;
r.getHot()
.then(data => {
  hotArray = data;
  console.log(hotArray);
});