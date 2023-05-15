import React, { useState } from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import AppNavigation from "./src/features/navigation";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

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
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <AppNavigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
