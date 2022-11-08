const express = require('express');
const cookieParser = require('cookie-parser');

const bodyParserMdw = express.Router();
const cookieParserMdw = express.Router();

function appMdwConfigInit(app) {
  try {
    // To remove X-Powered-By in ExpressJS
    app.disable('x-powered-by');
    app.set('trust proxy', true);

    setBodyParser(bodyParserMdw);

    // Cookie parser to object
    setCookieParser(cookieParserMdw);
  } catch (err) {
    console.log(`Error appMdwConfigInit:`, err.message);
  }
}

function setBodyParser(router) {
  // parse application/vnd.api+json as json
  router.use(express.urlencoded({ extended: true }));

  // get all data/stuff of the body (POST) parameters
  router.use(
    express.json({
      limit: '5mb',
      type: 'application/vnd.api+json'
    })
  );
}

function setCookieParser(router) {
  router.use(cookieParser());
}

module.exports = {
  init: (app) => {
    console.log('App config / middleware');
    appMdwConfigInit(app);
  },

  $BODYParser: bodyParserMdw,
  $COOKIEParser: cookieParserMdw
};
