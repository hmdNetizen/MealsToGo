import React, { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../restaurants/components/typography/text.component";

const Container = styled.View`
  flex: 1;
  justifycontent: "center";
`;

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex: 1;
  alignself: "flex-end";
  alignitems: "center";
`;

const ButtonContainer = styled.View`
  flex: 1;
  flexdirection: "row";
  backgroundcolor: "transparent";
  margin: 64px;
`;

const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <Container>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </Container>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <ProfileCamera type={type}>
      <ButtonContainer>
        <StyledTouchableOpacity onPress={toggleCameraType}>
          <Text variant="label">Flip Camera</Text>
        </StyledTouchableOpacity>
      </ButtonContainer>
    </ProfileCamera>
  );
};

export default CameraScreen;
