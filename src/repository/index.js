// this index js is created to export all the repo here and require this index file wherever required,
// so for eg if we have 10 repo , then we have to write 10 require statement, but this help to write only 1 require line

module.exports = {
    CityRepository: require('./city-repository')
}