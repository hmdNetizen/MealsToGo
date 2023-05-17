import React, { useContext } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utilities/safearea.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon icon="human" size={180} />
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={() => <List.Icon icon="heart" color="black" />}
        />
        <SettingsItem
          title="Logout"
          left={() => <List.Icon icon="logout" color="black" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
}

export default SettingsScreen;
