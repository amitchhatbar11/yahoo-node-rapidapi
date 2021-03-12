const AnalysisApi = {
  method: "GET",
  URL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis",
  queryParams: {
    symbol: "AMRN",
  },
  requestHeaders: {
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key": "",
    useQueryString: true,
  },
};

module.exports = AnalysisApi;
