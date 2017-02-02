sg-validator
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-validator
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-validator
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-validator.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-validator
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-validator.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/sg-validator/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-validator
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-validator.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-validator.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-validator
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-validator.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-validator
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-validator.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

JSON Schema validator

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sg-validator --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/sg-validator/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [tv4][tv4_url]
+ [SUGOS][sugos_url]
+ [Realglobe, Inc][realglobe,_inc_url]

[tv4_url]: https://github.com/geraintluff/tv4
[sugos_url]: https://github.com/realglobe-Inc/sugos
[realglobe,_inc_url]: http://realglobe.jp

<!-- Links End -->
