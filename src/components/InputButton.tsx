import React, { useState } from "react";
import styled from "styled-components/native";

const StyledPressable = styled.Pressable`
	width: 200px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 4px;
	border: 1px solid black;
	margin-bottom: 8px;
`;

const StyledText = styled.Text`
	text-align: center;
`;

interface InputButtonProps {
	title: string;
	onPress: () => void;
	onLongPress: () => void;
}

const InputButton = ({ title, onPress, onLongPress }: InputButtonProps) => {
	const [isPressedIn, setIsPressedIn] = useState<boolean>(false);

	return (
		<StyledPressable
			style={{ backgroundColor: isPressedIn ? "#4755698a" : "#47556900" }}
			onPress={onPress}
			onLongPress={onLongPress}
			onPressIn={() => setIsPressedIn(true)}
			onPressOut={() => setIsPressedIn(false)}
		>
			<StyledText>{title}</StyledText>
		</StyledPressable>
	);
};

export default InputButton;
