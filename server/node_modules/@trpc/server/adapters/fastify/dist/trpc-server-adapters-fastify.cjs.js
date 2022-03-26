'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./trpc-server-adapters-fastify.cjs.prod.js");
} else {
  module.exports = require("./trpc-server-adapters-fastify.cjs.dev.js");
}
