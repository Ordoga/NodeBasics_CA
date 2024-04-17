import fs from 'fs'



drawSquareToFile()
    

async function drawSquareToFile() {
    const str = getSquare(getRandomIntInclusive(3, 20))
    await drawToFile(str)
    setTimeout(drawSquareToFile, 200)
}

function drawToFile(str){
    return new Promise((resolve,reject) => {
        fs.writeFile('data/pic.txt', str, (err) => {
            reject(err)
        })
        resolve()
    })
}

function getSquare(size) {
    var str = '*'.repeat(size) + '\n'
    for (let i = 0; i < size; i++) {
        str += '*' + ' '.repeat(size - 2) + '*\n'
    } 
    str += '*'.repeat(size) + '\n'
    return str
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }