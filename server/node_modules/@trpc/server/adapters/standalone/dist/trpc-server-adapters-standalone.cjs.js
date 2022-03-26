'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server-adapters-standalone.cjs.prod.js");
} else {
  module.exports = require("./trpc-server-adapters-standalone.cjs.dev.js");
}
