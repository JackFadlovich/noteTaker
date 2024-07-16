//dependencies
const path = require('path');
const express = require('express')

const PORT =3001;
const app = express();
const { readFromFile, writeToFile, readAndAppend } = require('./fsFunctions.js');

app.use(express.json());

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

//HTML route
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'))
}
);

app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
}
);

app.get('/api/notes', async (req, res) => {
    res.json(await readFromFile())
})
    


//Get saved notes route

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a new note`);

    const { title, text } = req.body
    readAndAppend(req.body,'./db/db.json')
    res.json({message:"added note to DB and it works"})

})




app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
