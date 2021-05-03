'use strict'
const fs = require('fs')

const cont = fs.readFileSync(process.argv[2])
const lin = cont.toString().split('\n').length - 1
console.log(lin)