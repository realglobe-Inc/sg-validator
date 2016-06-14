'use strict'

const sgValidator = require('sg-validator')

// Define a validator with JSON-Schema
let validator = sgValidator({
  title: 'Example Schema',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    }
  },
  required: [ 'firstName', 'lastName' ]
})

// Execute validation
let errors = validator.validate({
  firstName: 'hoge',
  lastName: 'fuge'
})

if (errors) {
  throw new Error('Something is wrong!')
} else {
  console.log('Matches to the schema!')
}
