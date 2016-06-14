/**
 * Test case for sgValidator.
 * Runs with mocha.
 */
'use strict'

const SgValidator = require('../lib/sg_validator.js')
const assert = require('assert')
const co = require('co')

describe('sg-validator', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sg validator', () => co(function * () {
    let validator = new SgValidator({
      properties: {
        hoge: {
          type: 'number'
        },
        fuge: {
          type: 'string'
        }
      },
      required: [
        'fuge'
      ]
    })
    {
      let errors = validator.validate({ hoge: 1, fuge: 'foge' })
      assert.equal(errors, null)
    }
    {
      let errors = validator.validate({ hoge: 2 })
      assert.ok(errors)
    }
  }))
})

/* global describe, before, after, it */
