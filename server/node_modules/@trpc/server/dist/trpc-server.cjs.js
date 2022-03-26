'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server.cjs.prod.js");
} else {
  module.exports = require("./trpc-server.cjs.dev.js");
}
