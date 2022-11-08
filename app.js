// configs
const EnvConfig = require('./modules/env.config');
const ServerConfig = require('./modules/server.config');

// modules
// TODO

// app router/middleware
const AppMiddleware = require('./mdw/app.mdw');

const AppModule = [EnvConfig, ServerConfig, AppMiddleware];

AppModule.forEach((module) => module && module.init());
