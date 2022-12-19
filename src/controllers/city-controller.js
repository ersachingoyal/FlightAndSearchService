//all the request will be coming here in the controller and send to the service and will get back the response and send it to the user

const { CityService } = require('../services/index');

const cityService = new CityService();

// for create the method will be post and the data will be in req.body
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);   
        return res.status(200).json({  // have to return the response in json form
            data: city,
            success: true,
            message: "Succesfully create the city",
            err: {}
        })    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}

//method will be DELETE -> /city/:id -> the id will be in params
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id); 
        return res.status(200).json({
            data: response,
            success: true,
            message: "Succesfully deleted a city",
            err: {}
        })  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        })
    }
}


//GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id); 
        return res.status(200).json({
            data: response,
            success: true,
            message: "Succesfully fetched a city",
            err: {}
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        })
    }
}

//Patch -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body); 
    return res.status(200).json({
        data: response,
        success: true,
        message: "Succesfully updated a city",
        err: {}
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to update the city",
        err: error
    })
  }
};

const getAll = async (req, res) => {
    try {
      const cities = await cityService.getAllCities();
      return res.status(200).json({
        data: cities,
        success: true,
        message: "Succesfully fetched the city",
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to get the cities",
        err: error,
      });
    }

}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}