// downloadCountryFlags()
import fs from 'fs'
import fr from 'follow-redirects'
const { http, https } = fr

await downloadCountryFlags('data/newCountries.json')


async function downloadCountryFlags(path) {
        const countries = await getCountries(path)
        console.log('Countries:', countries.map(c => c.name))
        await downloadFlags(countries)
        console.log('Your flags are ready')
}


async function getCountries(path) {
    var countries = await readJsonFile(path)
    countries.sort((countryA,countryB) => {
        return countryB.population - countryA.population
    })
    return countries.slice(0,5)
}

function readJsonFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err,data) => {
            if(err) reject(`Error in promise: ${err}`)

            try {
                const json = JSON.parse(data)
                resolve(json)
            } catch (err) {
                console.log('Error in parsing :' + err)
            }
        })
    })
}

function downloadFlags(countries) {
    const directory = 'flags/';
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
    Promise.all(countries.map((country) => {
        return new Promise((resolve,reject) => {
            const file = fs.createWriteStream(`${directory}/${country.name.common}.png`)
            https.get(country.flags.png, (content) => {
                content.pipe(file)
                file.on('error', () => reject('Error in saving the file'))
                file.on('finish', () => {
                    file.close()
                    resolve()
                })
            })
        })
    })).then(console.log('Success!'))
        .catch(err => console.log(err)   
    )
}

