import React, { useState } from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
	border: 1px dotted black;
	margin-bottom: 8px;
`;

const StyledPressable = styled.Pressable`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 4px;
`;

const StyledText = styled.Text`
	text-align: center;
`;

interface ButtonProps {
	title: string;
	onPress: () => void;
	onLongPress: () => void;
}

const Button = ({ title, onPress, onLongPress }: ButtonProps) => {
	const [isPressedIn, setIsPressedIn] = useState<boolean>(false);

	return (
		<StyledView>
			<StyledPressable
				style={{ backgroundColor: isPressedIn ? "#4755698a" : "#47556900" }}
				onPress={onPress}
				onPressIn={() => setIsPressedIn(true)}
				onPressOut={() => setIsPressedIn(false)}
				onLongPress={onLongPress}
			>
				<StyledText>{title}</StyledText>
			</StyledPressable>
		</StyledView>
	);
};

export default Button;
