#!/usr/bin/env node

/**
 * Run tests.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeTesting = require('ape-testing')
const {execSync} = require('child_process')

apeTasking.runTasks('test', [
  () => apeTesting.runMocha('test/*_test.js', {
    timeout: 4000
  }),
  () => {
    execSync('npm run test-karma', {stdio: 'inherit'})
  }
], true)
