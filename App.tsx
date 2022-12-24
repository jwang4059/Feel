import React, { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import Layout from "./src/components/Layout";
import Header from "./src/components/Header";
import emotions from "./src/data/emotions";

export default function App() {
	const [selections, setSelections] = useState<string[]>([]);

	let map = emotions;
	for (const selection of selections) {
		map = map[selection];
	}

	const data = map ? Object.keys(map) : null;

	return (
		<Layout>
			<Header />
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
		</Layout>
	);
}
