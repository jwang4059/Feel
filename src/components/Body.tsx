import React from "react";
import styled from "styled-components/native";
import Form from "./Form";
import emotions from "../data/emotions";

const StyledView = styled.View`
	flex-grow: 1;
`;

const StyledText = styled.Text``;

interface Emotion {
	word: string | null;
	definition: string | null;
	map: {
		[key: string]: Emotion;
	} | null;
}

interface EmotionMap {
	[key: string]: Emotion;
}

interface BodyProps {
	selections: string[];
	select: (item: string) => void;
}

const Body = ({ selections, select }: BodyProps) => {
	let map: EmotionMap | null = emotions["map"];
	for (const selection of selections) {
		if (map) map = map[selection]["map"];
		else map = null;
	}

	const data: string[] | null = map ? Object.keys(map) : null;

	return (
		<StyledView>
			{data ? (
				<Form data={data} select={select} />
			) : (
				<StyledText>{selections.length}</StyledText>
			)}
		</StyledView>
	);
};

export default Body;
