import fs from "fs"
let  fs = require('fs')
const file = fs.readFileSync('./products.json', 'utf-8')
const ProdutsObj = JSON.parse(file)
console.log(ProdutsObj)