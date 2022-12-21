import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Title</Text>
			</View>
			<View>
				<FlatList data={[]} renderItem={() => <Button title={"Text"} />} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
