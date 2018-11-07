const express = require('express');
const app     = express();
const path    = require("path");
const armExercises= require("./database/arms.json");
const absExercises= require("./database/abs.json");
const chestExercises= require("./database/chest.json");
const backExercises= require("./database/back.json");
const legExercises= require("./database/legs.json");

app.use(express.json());
app.use('/images',express.static('images'));
app.use('/styles',express.static('styles'));
app.use('/Loaders',express.static('Loaders'));

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.htm'));
    console.log("request was made: "+ req.url);
});
app.get('/home',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.htm'));
    console.log("request was made: "+ req.url);
});
app.get('/:page',(req,res) =>{
    if(req.params.page==='aboutus'||
    req.params.page==='nutrition'||
    req.params.page==='supplements'||
    req.params.page==='workouts'||
    req.params.page==='calculator'||
    req.params.page==='tips'||
    req.params.page==='contact')
    {
    res.sendFile(path.join(__dirname+`/${req.params.page}.htm`));
    console.log("request was made: "+ req.url);}

    else if(req.params.page==='abs'||
    req.params.page==='arms'||
    req.params.page==='chest'||
    req.params.page==='legs'||
    req.params.page==='back')
    {
        res.sendFile(path.join(__dirname+`/${req.params.page}/${req.params.page}.htm`));
        console.log("request was made: "+ req.url);}
    
});

app.get('/api/database/:body',(req,res) =>{
    if(req.params.body==='arms'){
        res.json(armExercises);
        console.log("Api");
    }
    else if(req.params.body==='abs'){
        res.json(absExercises);
        console.log("Api");
    }
    else if(req.params.body==='chest'){
        res.json(chestExercises);
        console.log("Api");
    }
    else if(req.params.body==='back'){
        res.json(backExercises);
        console.log("Api");
    }
    else if(req.params.body==='legs'){
        res.json(legExercises);
        console.log("Api");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

