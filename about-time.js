import ms from 'ms'
import fs from 'fs'
import readline from 'readline'

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