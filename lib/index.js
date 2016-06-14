/**
 * JSON Schema validator
 * @module sg-validator
 */

'use strict'

const create = require('./create')
const SgValidator = require('./sg_validator')

let lib = create.bind(this)

Object.assign(lib, SgValidator, {
  create,
  SgValidator
})

module.exports = lib
