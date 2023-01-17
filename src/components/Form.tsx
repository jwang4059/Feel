import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import emotions, { EmotionMap } from "../data/emotions";
import ListItem from "./ListItem";

const StyledView = styled.View`
	height: 600px;
`;

const StyledFlatList = styled.FlatList`
	width: 350px;
` as unknown as typeof FlatList;

interface FormProps {
	selections: string[];
	select: (item: string) => void;
}

const Form = ({ selections, select }: FormProps) => {
	let map: EmotionMap | undefined = emotions["map"];

	for (const selection of selections) {
		if (map) map = map[selection]["map"];
	}

	const data = map ? Object.values(map).map(({ map: _, ...rest }) => rest) : [];

	return (
		<StyledView>
			<StyledFlatList
				contentContainerStyle={{
					display: "flex",
					alignItems: "center",
				}}
				data={data}
				renderItem={({ item }) => <ListItem emotion={item} select={select} />}
			/>
		</StyledView>
	);
};

export default Form;
