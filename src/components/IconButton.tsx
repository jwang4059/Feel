import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledPressable = styled.Pressable`
	display: flex;
	justify-content: center;
	align-items: center;
`;

interface IconButtonProps {
	children: React.ReactNode;
	onPress?: () => void;
}

const IconButton = ({ children, onPress }: IconButtonProps) => {
	return (
		<StyledPressable onPress={onPress}>
			<Text>{children}</Text>
		</StyledPressable>
	);
};

export default IconButton;
