//CommonJS, every file is a module by default
//Modules-  Encapsulated Code (only share the minimum)

const names = require('./4-names');
const sayHi = require('./5-utlis');
const person = require('./6-alternative-flavour');
console.log(person);
require('./7-mind-grenade.js');

sayHi('Sagnik');
sayHi(names.john);
sayHi(names.peter);