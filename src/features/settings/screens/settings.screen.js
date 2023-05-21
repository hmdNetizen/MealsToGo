import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utilities/safearea.component";
import Spacer from "../../restaurants/components/spacer/spacer.component";
import { Text } from "../../restaurants/components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

function SettingsScreen({ navigation }) {
  const { user, onLogout } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePhoto = async (currentUser) => {
    const image = await AsyncStorage.getItem(`${currentUser.uid}-photo`);

    setPhoto(image);
  };

  useEffect(() => {
    getProfilePhoto(user);
  }, [user]);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && <Avatar.Icon icon="human" size={180} />}
          {photo && <Avatar.Image uri={photo} size={180} />}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={() => <List.Icon icon="heart" color="black" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={() => <List.Icon icon="logout" color="black" />}
          onPress={onLogout}
        />
        <SettingsItem
          title="Camera"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={() => <List.Icon icon="camera" color="black" />}
          onPress={() => navigation.navigate("Camera")}
        />
      </List.Section>
    </SafeArea>
  );
}

export default SettingsScreen;
