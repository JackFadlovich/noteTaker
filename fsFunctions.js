//Dependencies
const fs = require('fs');
const fsProm = require('fs').promises
const { strigify } = require('querystring')
const notes = require('./db/db.json')

//Write data to a file

const writeToFile = (file, content) =>
    fs.writeFile(file, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info('Data written')
    );



    const readFromFile = () =>
     {
        return fsProm.readFile('./db/db.json', 'utf8').then(async (data) => {
            
                const parsedData = await JSON.parse(data);
                return parsedData
            
        });
        }  
    

  


        //makes it so it doesnt overwwrite it (I think)
    const readAndAppend = (content, file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const parsedData = JSON.parse(data);
                parsedData.push(content);
                writeToFile(file, parsedData);
            }
        });
    };

    
    
    module.exports = { readFromFile, writeToFile, readAndAppend };