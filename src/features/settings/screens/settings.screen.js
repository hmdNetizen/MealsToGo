import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { List } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utilities/safearea.component";

function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          title="Favorites"
          style={{ padding: 16 }}
          description="View your favorites"
          left={() => <List.Icon icon="heart" color="black" />}
        />
        <List.Item
          title="Logout"
          style={{ padding: 16 }}
          left={() => <List.Icon icon="logout" color="black" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
}

export default SettingsScreen;
