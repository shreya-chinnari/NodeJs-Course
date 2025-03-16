// multiple exports using object

const requestHandler = require("./4.using_modules")

module.exports = {
   handler : requestHandler,
   extra : "Extra"
}

// setting multiple properties

module.exports.handler = requestHandler;
module.exports.extra = "Extra";

// shortcut

exports.handler = requestHandler;
exports.extra = "Extra";