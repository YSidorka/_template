const express = require('express');

const ConfigMiddleware = require('./config.mdw');

const MemoryRouter = require('./memory.router');

const app = express();

function appInit() {
  try {
    ConfigMiddleware.init(app);

    app.use(ConfigMiddleware.$BODYParser);
    app.use(ConfigMiddleware.$COOKIEParser);

    // middleware to return memory status
    app.use(MemoryRouter);

    // error handler
    app.use(ConfigMiddleware.$ERRORHandler);
  } catch (err) {
    console.log(`Error appInit:`, err.message);
  }
}

module.exports = {
  init: () => {
    console.log('App router / middleware');
    appInit();
  },
  getApp: () => app
};
