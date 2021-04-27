const memoryCache = require('memory-cache');
const { CACHE_KEY } = require('../config');

module.exports = function(duration){
    return (req, res, next)=>{
        const key = CACHE_KEY + req.originUrl || req.url;
        const cachedBody = memoryCache.get(key);

        if(cachedBody){
            return res.send(JSON.parse(cachedBody));
        } else {
            res.sendResponse = res.send;
            res.send = body =>{
                memoryCache.put(key, body, duration * 1000);
                res.sendResponse(body);
            };
            next();
        }
    }
}