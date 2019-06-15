// This API Key is free and has a daily limit, so it is secure to make it public!!
var config = {
    corsProxy: 'https://cors-anywhere.herokuapp.com/',
    darkSkyURL: 'https://api.darksky.net/forecast/',
    apiKey : '23de50799409973690cd8f7ac2274050',
    locationCoords: '41.919032,-87.706850',
    excludeList: "&exclude=[minutely,hourly,daily,alerts,flags]"
}
var url = config.corsProxy
+ config.darkSkyURL
+ config.apiKey
+ '/'
+ config.locationCoords + '?'
+ config.excludeList;