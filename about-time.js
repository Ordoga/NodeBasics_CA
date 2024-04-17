const ms = require('ms')
const fs = require('fs')
const readline = require('readline')
const utilService = require('./util.service.js')

const timestampsStream = fs.createReadStream('data/timestamps.txt')

const rl = readline.createInterface({
    input: timestampsStream,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(ms(+line, {long:true}));
});

rl.on('close', () => {
    console.log('Finished reading the file.');
});