const { City } = require('../models/index');   // got access to the model to interact with the table

class CityRepository{
    async createCity({ name }){
        try {
            const city = await City.create({ name }); // to create an entry into the table
            return city;
        } catch (error) {
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
        } catch (error) {
            throw { error }
        }
    }
}

module.exports = CityRepository;