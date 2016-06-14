/**
 * Create a sg validator instance
 * @function create
 */
'use strict'

const SgValidator = require('./sg_validator')

/** @lends create */
function create (...args) {
  return new SgValidator(...args)
}

module.exports = create
