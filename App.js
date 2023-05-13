import React, { useEffect, useState } from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import AppNavigation from "./src/features/navigation";
import { FavoriteContextProvider } from "./src/services/favorites/favorites.context";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBly8861kwwZqBBPqNH5Gm7XVkbXHg40",
  authDomain: "mealstogo-af12c.firebaseapp.com",
  projectId: "mealstogo-af12c",
  storageBucket: "mealstogo-af12c.appspot.com",
  messagingSenderId: "106162015833",
  appId: "1:106162015833:web:384464a78d9d6a7ef62b48",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAutheticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("hameed@gmail.com", "Test123")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAutheticated) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoriteContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoriteContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
