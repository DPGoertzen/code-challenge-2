var router = require('express').Router();
var path = require('path');

router.get('/', function(request, response){
  var ourPath = path.join(__dirname, '../public/views/index.html');
  response.sendFile(ourPath);
  console.log('serving', ourPath);
});

module.exports = router;
