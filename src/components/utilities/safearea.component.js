import styled from "styled-components/native";
import { Platform, StatusBar, SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? 0 : `${StatusBar.currentHeight}px`};
`;
