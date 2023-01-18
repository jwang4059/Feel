import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { EmotionMap } from "../data/emotions";
import ListItem from "./ListItem";

const StyledView = styled.View`
	height: 600px;
`;

const StyledFlatList = styled.FlatList`
	width: 350px;
` as unknown as typeof FlatList;

interface FormProps {
	map: EmotionMap | undefined;
	selections: string[];
	select: (item: string) => void;
}

const Form = ({ map, selections, select }: FormProps) => {
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
