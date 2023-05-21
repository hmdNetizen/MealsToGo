const url = require("url");
const cors = require("cors")({ origin: true });
const { locations: locationsMock } = require("./geocode.mock");

module.exports.geoCodeRequest = (request, response) => {
  cors(request, response, () => {
    // Your code here
    const { city } = url.parse(request.url, true).query;
    const locationMock = locationsMock[city.toLowerCase()];

    response.json(locationMock);
  });
};
