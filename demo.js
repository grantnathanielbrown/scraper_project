// we just want to log some stuff from reddit

// REQUIRED PACKAGES
var snoowrap = require('snoowrap');

// 
const r = new snoowrap({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    clientId: '38BBGLjgEX3i8A',
    clientSecret: '3Ji_s4lJ4RzlXSIfxngu9WvTOfk',
    refreshToken: '23280913-oFa2QT9FoJEU2mLC2r-WeyHsXN0'
  });

//   example request

r.getHot().map(post => post.title).then(console.log);