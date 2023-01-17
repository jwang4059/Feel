import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import emotions, { Emotion, EmotionMap } from "../data/emotions";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconButton from "./IconButton";
import ListItem from "./ListItem";

const StyledView = styled.View`
	height: 600px;
`;

const StyledFlatList = styled.FlatList`
	width: 350px;
` as unknown as typeof FlatList;

interface ResultProps {
	selections: string[];
}

const Result = ({ selections }: ResultProps) => {
	let map: EmotionMap | undefined = emotions["map"];
	const data: Emotion[] = [];

	for (const selection of selections) {
		if (map) {
			const emotion: Emotion = map[selection];
			const { map: _, ...rest } = emotion;
			data.push(rest);
			map = emotion["map"];
		}
	}

	return (
		<StyledView>
			<StyledFlatList
				contentContainerStyle={{
					display: "flex",
					alignItems: "center",
				}}
				data={data}
				renderItem={({ item }) => <ListItem emotion={item} />}
				ItemSeparatorComponent={() => (
					<IconButton>
						<Icon
							name={"arrow-down-bold-outline"}
							size={30}
							color={"#f5f5f5"}
						/>
					</IconButton>
				)}
			/>
		</StyledView>
	);
};

export default Result;
