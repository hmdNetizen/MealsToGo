import React, { useState, createContext, useEffect } from "react";
import { locationRequest, transformLocations } from "./location.services";

const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    onSearch(keyword);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = (query) => {
    setKeyword(query);
    setIsLoading(true);
    locationRequest(query)
      .then(transformLocations)
      .then((result) => {
        setLocation(result);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        keyword,
        onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
