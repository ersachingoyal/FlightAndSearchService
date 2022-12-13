const express = require('express');
// require('dotenv').config();  -> we will move this process in config folder
const { PORT } = require('./config/serverConfig')
const bodyParser = require('body-parser');


const setupAndStartServer = async() =>{

    //creating the express object
    //const PORT = 3000;  // we will move these all sensitive info like this one and other like pass into env variables
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, () =>{
        console.log("server started at port" ,PORT);
        // console.log(process.env.PORT)
    })
}

setupAndStartServer();