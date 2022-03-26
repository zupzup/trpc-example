'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server-rpc.cjs.prod.js");
} else {
  module.exports = require("./trpc-server-rpc.cjs.dev.js");
}
