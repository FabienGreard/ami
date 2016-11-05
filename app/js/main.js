var $ = require('jquery');

var css = require('./../css/main.css');

require(['./component/temp.js'], function(res){
  $('#loading').remove();
  $('#app').append(res.html);
  console.error(res.log);
});
