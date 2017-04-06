const package = require("./package.json");
const myNewApi = require("./lib/my_new_api.js");

console.log("loaded" + package.name + "verson" + package.version);

exports.handler = function(event, context){
  myNewApi.handleRequest(event, context.done);
}
