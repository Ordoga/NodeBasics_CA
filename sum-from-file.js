import fs from 'fs'


function sumFromFile(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err,data) => {
            if (err) reject(`Error: ${err}`)
            const dataAsArray = data.split(/\r?\n/)
            let sum = 0
            dataAsArray.forEach((num) => sum += +num) 
            resolve(sum)
        })
    })
}


// TO ASK - How to stop this in summing time. if sum is number?
try {
    const sum = await sumFromFile('data/nums.txt')
    console.log(`Sum: ${sum}`)
} catch (err) {
    console.log('Cannot sum', err)
}





