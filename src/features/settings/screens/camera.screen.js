import React, { useState, useRef, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components/native";
import { Text } from "../../restaurants/components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

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

const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef();

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

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <TouchableOpacity onPress={snap} disabled={!isCameraReady}>
      <ProfileCamera
        ref={cameraRef}
        type={type}
        onCameraReady={onCameraReady}
        ratio={"16:9"}
      >
        <ButtonContainer>
          <StyledTouchableOpacity
            onPress={toggleCameraType}
            disabled={!isCameraReady}
          >
            <Text variant="label">Flip Camera</Text>
          </StyledTouchableOpacity>
          <Text>Snap</Text>
        </ButtonContainer>
      </ProfileCamera>
    </TouchableOpacity>
  );
};

export default CameraScreen;
