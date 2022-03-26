'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server-ws.cjs.prod.js");
} else {
  module.exports = require("./trpc-server-ws.cjs.dev.js");
}
