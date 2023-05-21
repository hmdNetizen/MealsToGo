import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://127.0.0.1:5001/mealstogo-af12c/us-central1/geoCode?city=${searchTerm}`
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => console.error(err));
};

// const getUsers = () => {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error("user", err));
// };

// getUsers();

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
