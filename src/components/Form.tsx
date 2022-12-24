import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

interface FormProps {
	data: string[];
	onPress: (item: string) => void;
}

const Form = ({ data, onPress }: FormProps) => {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={data}
				renderItem={({ item }) => (
					<Pressable style={styles.button} onPress={() => onPress(item)}>
						<Text style={styles.text}>{item}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
	container: {
		width: 240,
	},
	list: {
		backgroundColor: "black",
		borderWidth: 12,
		borderColor: "red",
		borderStyle: "solid",
	},
	button: {
		backgroundColor: "cyan",
		paddingHorizontal: 12,
		paddingVertical: 4,
		marginBottom: 16,
	},
	text: {
		textAlign: "center",
	},
});
