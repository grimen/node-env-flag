
/* =========================================
      IMPORTS
-------------------------------------- */

const chai = require('chai')


/* =========================================
      ENVIRONMENT
-------------------------------------- */

process.env.NODE_ENV = 'test'


/* =========================================
      OPTIONS
-------------------------------------- */

chai.config.includeStack = true


/* =========================================
      EXPORTS
-------------------------------------- */

const assert = chai.assert
const expect = chai.expect
const debug = console.log

module.exports = {
    chai,
    assert,
    expect,
    debug,
}
