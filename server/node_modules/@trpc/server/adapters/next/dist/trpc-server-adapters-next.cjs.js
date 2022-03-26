'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server-adapters-next.cjs.prod.js");
} else {
  module.exports = require("./trpc-server-adapters-next.cjs.dev.js");
}
