import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

// const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

// const Spacer = ({ variant }) => {
//   if (variant === "top.large") {
//     return <TopLarge />;
//   }

//   if (variant === "top.medium") {
//     return <TopMedium />;
//   }

//   if (variant === "left.small") {
//     return <LeftSmall />;
//   }

//   if (variant === "left.large") {
//     return <LeftLarge />;
//   }

//   if (variant === "left.medium") {
//     return <LeftMedium />;
//   }

//   return <TopSmall />;
// };

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
