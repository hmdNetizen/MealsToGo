import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utilities/safearea.component";
import { Text, Button } from "react-native";

function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button title="Logout" onPress={onLogout} />
    </SafeArea>
  );
}

export default SettingsScreen;
