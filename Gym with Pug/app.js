
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 770;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as "pug"
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "Passing values from backend";
    const params = {
        'title' : 'Doggy',
        'content' : con
    }
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
    console.log(req.body);

    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    
    let outputToWrite = `Details are : \n${name} \n${age} \n${address}\n${gender}\n${more}`;
    fs.writeFileSync('Output.txt', outputToWrite);

    const params = {'message' : 'Your form has been submitted'};
    res.status(200).render('index.pug', params);
});


// STARTING SERVER 
app.listen(port, ()=>{
    console.log(`This application is running successfully on port $(port)`);
});
