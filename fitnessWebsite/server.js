const express = require('express');
const app     = express();
const path    = require("path");
const armExercises= require("./arms/arms.json");
const absExercises= require("./abs/abs.json");
const chestExercises= require("./chest/chest.json");
const backExercises= require("./back/back.json");
const legExercises= require("./legs/legs.json");

app.use(express.json());

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.htm'));
    console.log("request was made: "+ req.url);
});
app.get('/home',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.htm'));
    console.log("request was made: "+ req.url);
});
app.get('/armsLoader.js',(req,res) =>{
   
    res.sendFile(path.join(__dirname+`/arms/armsLoader.js`));
    console.log("request was made: "+ req.url);
});
app.get('/absLoader.js',(req,res) =>{
   
    res.sendFile(path.join(__dirname+`/abs/absLoader.js`));
    console.log("request was made: "+ req.url);
});
app.get('/chestLoader.js',(req,res) =>{
   
    res.sendFile(path.join(__dirname+`/chest/chestLoader.js`));
    console.log("request was made: "+ req.url);
});
app.get('/backLoader.js',(req,res) =>{
   
    res.sendFile(path.join(__dirname+`/back/backLoader.js`));
    console.log("request was made: "+ req.url);
});
app.get('/legsLoader.js',(req,res) =>{
   
    res.sendFile(path.join(__dirname+`/legs/legsLoader.js`));
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
    
    else if( req.params.page==='Header.css'||
        req.params.page==='style.css'||
        req.params.page==='aboutus.css'||
        req.params.page==='nutrition.css'||
        req.params.page==='supplements.css'||
        req.params.page==='workouts.css'||
        req.params.page==='tips.css'){
        
            res.sendFile(path.join(__dirname+`/${req.params.page}`));
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
app.get('/images/:page',(req,res) =>{
    if(req.params.page==='abs.jpg'||
    req.params.page==='arms.jpg'||
    req.params.page==='chest.jpg'||
    req.params.page==='legs.jpg'||
    req.params.page==='back.jpg'||
    req.params.page==='banner.jpg'||
    req.params.page==='benefits.jpg'||
    req.params.page==='Burn.jpg'||
    req.params.page==='humanAnotomy.jpg'||
    req.params.page==='image.jpg'||
    req.params.page==='Mimg.JPG'||
    req.params.page==='running.jpg'||
    req.params.page==='Food_Prep.jpg')
    {
    res.sendFile(path.join(__dirname+`/images/${req.params.page}`));
    console.log("request was made: "+ req.url);}
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

