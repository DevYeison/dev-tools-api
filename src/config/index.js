'use strict';

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path: '.env'});
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    CACHE_KEY: process.env.CACHE_KEY,
    SWAGGER_PATH: `./src/config/swagger/swagger${process.env.SWAGGER_DOC}.json`
}