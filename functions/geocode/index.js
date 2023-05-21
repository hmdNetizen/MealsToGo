const { locations: locationMock } = require("./geocode.mock");
const url = require("url");

module.exports.geoCodeRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  const location = locationMock[city.toLowerCase()];

  response.json(JSON.stringify(location));
};
