const express = require('express');
// require('dotenv').config();  -> we will move this process in config folder
const { PORT } = require('./config/serverConfig')


const setupAndStartServer = async() =>{

    //creating the express object
    //const PORT = 3000;  // we will move these all sensitive info like this one and other like pass into env variables
    const app = express();
    app.listen(PORT, () =>{
        console.log("server started at port" ,PORT);
        // console.log(process.env.PORT)
    })
}

setupAndStartServer();