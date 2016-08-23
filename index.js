const m = require('./lib/')

function createClient(id) {
  return new m(id)
}

module.exports = {
  createClient: createClient
}
