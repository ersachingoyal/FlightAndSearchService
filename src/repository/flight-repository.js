const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {  //this way we have private memebr functions
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price : {[Op.lte]: data.maxPrice} },
        //             { price : {[Op.gte]: data.minPrice} }
        //         ]
        //     })
        // }
        
        let priceFilter = [];
        if(data.minPrice){
            // Object.assign(filter, {price : {[Op.gte]: data.minPrice}}); // will add the min price property to the filter object gte-> greatet than equal to
            priceFilter.push({price : {[Op.gte] : data.minPrice}})
        }
        if(data.maxPrice){
            Object.assign(filter, {price : {[Op.lte]: data.maxPrice}}); // will add the min price property to the filter object gte-> greatet than equal to
            priceFilter.push({price : {[Op.lte] : data.maxPrice}})
        }

        //but the price will be one of the ie max price when we apply both
        //to handle the above issue we have use price filter array
        Object.assign(filter, {[Op.and]: priceFilter});
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at the Repo layer");
            throw{error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight
        } catch (error) {
            console.log("Something went wrong at the Repo layer");
            throw{error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at the Repo layer");
            throw{error};
        }
    }
}

module.exports = FlightRepository;