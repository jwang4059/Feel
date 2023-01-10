import React from "react";
import { View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ResetButtonProps {
	onPress: () => void;
}

const ResetButton = ({ onPress }: ResetButtonProps) => {
	return (
		<View>
			<Pressable onPress={onPress}>
				<Text>
					<Icon name={"restart"} size={30} color={"#900"} />;
				</Text>
			</Pressable>
		</View>
	);
};

export default ResetButton;
