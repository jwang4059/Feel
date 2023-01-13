import React from "react";
import { Text, Pressable } from "react-native";

interface IconButtonProps {
	children: React.ReactNode;
	onPress: () => void;
}

const IconButton = ({ children, onPress }: IconButtonProps) => {
	return (
		<Pressable onPress={onPress}>
			<Text>{children}</Text>
		</Pressable>
	);
};

export default IconButton;
