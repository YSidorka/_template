const express = require('express');
const { MEMORY_ROUTE } = require('../common/constants');
const { setResponseHeader } = require('../common/utils');

const router = express.Router();

router.get(MEMORY_ROUTE, async (req, res) => {
  setResponseHeader(res, { appJSON: true, noRobots: true, noCache: true });
  try {
    // memory
    const used = process.memoryUsage();
    const result = {};
    Object.keys(used).forEach((key) => {
      result[key] = `${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`;
    });
    return res.send(result);
  } catch (err) {
    console.log(err.stack);
    return res.status(500).send({ message: '!!Something goes wrong', err: err.message });
  }
});

module.exports = router;
