import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  const locationMock = locations[searchTerm];

  return new Promise((resolve, reject) => {
    if (!locationMock) {
      reject("Not found");
    }

    resolve(locationMock);
  });
};

export const transformLocations = (result) => {
  const transformedResponse = camelize(result);
  const { geometry = {} } = transformedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
