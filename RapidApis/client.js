const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

// Error in case the RapidApi key is not added.
(() => {
  if (!process.env.RAPIDAPI_KEY) {
    throw new Error("Add RapidAPI key.");
  }
})();

class RapidAPI {
  constructor(method, uri, params, reqHeaders) {
    this.requestObject = {
      method: method,
      url: uri,
      params: params,
      headers: reqHeaders,
    };
  }

  callApi() {
    this.requestObject.headers["x-rapidapi-key"] = process.env.RAPIDAPI_KEY;

    return axios(this.requestObject)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(`RapidAPI failed. ${error}`);
      });
  }
}

module.exports = RapidAPI;
