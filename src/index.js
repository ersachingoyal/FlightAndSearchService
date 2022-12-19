const express = require('express');
// require('dotenv').config();  -> we will move this process in config folder
const { PORT } = require('./config/serverConfig')
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');

const { Airport, City } = require('./models/index');
const db = require('./models/index');

// const CityRepository =  require('./repository/city-repository')

const setupAndStartServer = async() =>{

    //creating the express object
    //const PORT = 3000;  // we will move these all sensitive info like this one and other like pass into env variables
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
     
    app.listen(PORT, async () =>{
        console.log("server started at port" ,PORT);
        // console.log(process.env.PORT)
        // const repo = new CityRepository();   this was just to check , not do actual task
        // repo.createCity({name: "New Delhi"});

        // const airports = await Airport.findAll({
        //     include: [{
        //         model: City  // this will include all the cities to which the airports are mapped
        //     }]
        // });

        //now to get the all the airports of a particular withput writing sql raw query we can use sequelize cli
        // for this we first need to sync the models;

        // db.sequelize.sync({alert: true});   -> this command we can use, but this i very costly operation so we can use it once
        if(process.env.SYNC_DB){
            db.sequelize.sync({alert: true}); // we can add and remove that sync_db variable from env file so it will not sync again and again whenever the server starts
        }

        // const city = await City.findOne({
        //     where:{
        //         id: 8
        //     }
        // });
        // const airports = await city.getAirports(); //this method is given by sequelize after the db sync, so now we will get all the airports of that particular city
        // console.log(airports)
    })
}

setupAndStartServer();