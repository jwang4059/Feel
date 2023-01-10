import React, { useState } from "react";
import { Text } from "react-native";
import Layout from "./src/components/Layout";
import Header from "./src/components/Header";
import Form from "./src/components/Form";
import ResetButton from "./src/components/ResetButton";
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
			{data ? (
				<Form
					data={data}
					onPress={(item) => setSelections([...selections, item])}
				/>
			) : (
				<Text>{selections.join("")}</Text>
			)}
			<ResetButton onPress={() => setSelections([])} />
		</Layout>
	);
}
