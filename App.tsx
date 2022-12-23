import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import emotions from "./src/data/emotions";

export default function App() {
	const [selections, setSelections] = useState<string[]>([]);

	let map = emotions;
	for (const selection of selections) {
		map = map[selection];
	}

	const data = map ? Object.keys(map) : null;

	return (
		<View style={styles.container}>
			<View>
				<Text>Title</Text>
			</View>
			<View>
				{data ? (
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<Button
								title={item}
								onPress={() => setSelections([...selections, item])}
							/>
						)}
					/>
				) : (
					<Text>{selections.join("")}</Text>
				)}
			</View>
			<View>
				<Text>Status Bar</Text>
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
