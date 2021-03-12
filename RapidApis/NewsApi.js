const yahooNewsAPI = {
    "method": "GET",
    "URL": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news",
    "queryParams": {
        "region": "US",
	    "category": "NBEV"
    },
    "requestHeaders": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "",
        "useQueryString": true
    }
}

module.exports = yahooNewsAPI