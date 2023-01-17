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
	map: EmotionMap | null;
	select: (item: string) => void;
}

const Form = ({ map, select }: FormProps) => {
	const data: string[] | null = map ? Object.keys(map) : null;

	return (
		<StyledView>
			<StyledFlatList
				contentContainerStyle={{
					display: "flex",
					alignItems: "center",
				}}
				data={data}
				renderItem={({ item }) => (
					<ListItem map={map} item={item} select={select} />
				)}
			/>
		</StyledView>
	);
};

export default Form;
