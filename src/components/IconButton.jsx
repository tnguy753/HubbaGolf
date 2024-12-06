import styled from "styled-components";

// Styled container for the button
const StyledIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  color: ${({ color }) => color || "#000"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  padding: ${({ size }) => size || "10px"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#e0e0e0"};
    color: ${({ hoverColor }) => hoverColor || "#000"};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
`;

// IconButton Component
const IconButton = ({
  icon, // Pass in any React icon (e.g., from FontAwesome, Material-UI, etc.)
  onClick,
  size,
  color,
  bgColor,
  hoverBgColor,
  hoverColor,
  border,
  borderRadius,
  fontSize,
  ...props
}) => {
  return (
    <StyledIconButton
      onClick={onClick}
      size={size}
      color={color}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      hoverColor={hoverColor}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      {...props}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
