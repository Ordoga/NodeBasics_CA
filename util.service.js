const fs = require('fs')


module.exports = {
    readTxtFile,
  }

// TODO add error
function readTxtFile(path) {
    const str = fs.readFileSync(path, 'utf-8')
    return str
}