// Modules

const names = require('./name');
const sayHi = require('./utils');
const data = require('./alternateExport')
require('./basics')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)