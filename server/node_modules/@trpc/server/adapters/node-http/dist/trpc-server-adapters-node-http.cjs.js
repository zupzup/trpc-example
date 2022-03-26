'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server-adapters-node-http.cjs.prod.js");
} else {
  module.exports = require("./trpc-server-adapters-node-http.cjs.dev.js");
}
