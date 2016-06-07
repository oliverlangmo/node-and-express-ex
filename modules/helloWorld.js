var helloAgain = require('./helloAgain');

var helloWorld = function(){
  var outPutText = "...and this is from helloWorldFromModule() in helloWorldModule.js" + helloAgain();
  return( outPutText);
};

module.exports= helloWorld;
