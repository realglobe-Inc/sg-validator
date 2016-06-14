/**
 * A validator class
 * @class SgValidator
 * @param {Object} schema - JSON schema
 */
'use strict'

const assert = require('assert')
const tv4 = require('tv4')

/** @lends SgValidator */
class SgValidator {
  constructor (schema) {
    const s = this
    assert.ok(schema, 'schema is required')
    s.schema = schema
  }

  /**
   * Validate a data
   * @param {Object} data
   * @returns {?ValidationError}
   */
  validate (data) {
    const s = this
    let result = tv4.validateMultiple(data, s.schema)
    if (result.valid) {
      return null
    }
    return result.errors
  }
}

module.exports = SgValidator

/**
 * Error result of validation
 * @typedef {Object} ValidationError
 */

