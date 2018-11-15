const express = require('express');
const mongoose =require("mongoose");
const app     = express();
const path    = require("path");

//connect to mongodb
mongoose.connect("mongodb://chris:test123@ds157383.mlab.com:57383/fitness_exercises");
console.log("Connected to MongoDB");
//Create schema
const exersiceSchema= new mongoose.Schema(
{
    _id: {
        oid: String
    },
    Body: [{
    Exercise: String,
    Descriptions: String,
    Secondary: String,
    link: String,
    }]
}
);

//get model/collection from mongodb
const absModel= mongoose.model('abs',exersiceSchema);
const armsModel= mongoose.model('arms',exersiceSchema);
const chestModel= mongoose.model('chest',exersiceSchema);
const backModel= mongoose.model('back',exersiceSchema);
const legsModel= mongoose.model('legs',exersiceSchema);

app.use(express.json());
//routing for static files
app.use('/images',express.static('images'));
app.use('/styles',express.static('styles'));
app.use('/Loaders',express.static('Loaders'));

//routing to webpage
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.htm'));
    console.log("request was made: "+ req.url);
});

//routing to home 
app.get('/home',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.htm'));
    console.log("request was made: "+ req.url);
});

//routing to pages and workout pages
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

//Routing to api respond with bodyExercises list
app.get('/api/database/:body',(req,res) =>{
    if(req.params.body==='arms'){
        armsModel.find({},'-_id', (err,data) =>{
            if(err) throw err;
            res.json(data[0]);
            console.log("fetched data from mongodb!");
        });
    }
    else if(req.params.body==='abs'){
        absModel.find({},'-_id', (err,data) =>{
            if(err) throw err;
            res.json(data[0]);
            console.log("fetched data from mongodb!");
        });
    }
    else if(req.params.body==='chest'){
        chestModel.find({},'-_id', (err,data) =>{
            if(err) throw err;
            res.json(data[0]);
            console.log("fetched data from mongodb!");
        });
    }
    else if(req.params.body==='back'){
        backModel.find({},'-_id', (err,data) =>{
            if(err) throw err;
            res.json(data[0]);
            console.log("fetched data from mongodb!");
        });
    }
    else if(req.params.body==='legs'){
        legsModel.find({},'-_id', (err,data) =>{
            if(err) throw err;
            res.json(data[0]);
            console.log("fetched data from mongodb!");
        });
    }
    else{
        res.sendStatus(404);
        console.log("Not Found");
    }
});

//Set and listen on enviroment port or port 3000 and log data
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

