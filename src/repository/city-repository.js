// repo file is used to interact with models , it exposes all the functions related to our model table

const { City } = require('../models/index');   // got access to the model to interact with the table

class CityRepository{
    async createCity({ name }){
        try {
            const city = await City.create({ name }); // to create an entry into the table
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw { error }
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong");
            throw { error }
        }
    }

    async updateCity(cityId, data) {  //cityid to match which city to update and the data is the param which is going to update
        try {
            // The below approach also works but will not return updated object
            // if we are using PgSql then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId); //coz id is a primary key, so findbypk directly
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw { error }
        }
    }

    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong");
            throw { error }
        }
    }
}

module.exports = CityRepository;