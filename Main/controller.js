const client = require("../RapidApis/client");
const AnalysisApi = require("../RapidApis/AnalysisApi");
const NewsApi = require("../RapidApis/NewsApi");

const getAnalysis = () => {
  return new client(
    AnalysisApi.method,
    AnalysisApi.URL,
    AnalysisApi.queryParams,
    AnalysisApi.requestHeaders
  )
    .callApi()
    .then((apiData) => {
      return apiData;
    })
    .catch((error) => {
      throw new Error(`Analysis api error. ${error}`);
    });
};

const getNews = () => {
  return new client(
    NewsApi.method,
    NewsApi.URL,
    NewsApi.queryParams,
    NewsApi.requestHeaders
  )
    .callApi()
    .then((apiData) => {
      return apiData;
    })
    .catch((error) => {
      throw new Error(`News api error. ${error}`);
    });
};

const Controller = {
  getAnalysis,
  getNews,
};

module.exports = Controller;
