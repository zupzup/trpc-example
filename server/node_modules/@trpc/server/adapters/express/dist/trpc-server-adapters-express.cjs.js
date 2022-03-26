'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server-adapters-express.cjs.prod.js");
} else {
  module.exports = require("./trpc-server-adapters-express.cjs.dev.js");
}
