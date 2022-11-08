const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

const MAIN_DIR = process.env.INIT_CWD;
const MEMORY_ROUTE = '*';

module.exports = {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,

  MAIN_DIR,
  MEMORY_ROUTE
};
