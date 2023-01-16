import React from "react";
import styled from "styled-components/native";
import emotions, { EmotionMap } from "../data/emotions";
import Form from "./Form";

const StyledView = styled.View`
	flex-grow: 1;
`;

const StyledText = styled.Text``;

interface MainProps {
	selections: string[];
	select: (item: string) => void;
}

const Main = ({ selections, select }: MainProps) => {
	let map: EmotionMap | null = emotions["map"];
	for (const selection of selections) {
		if (map) map = map[selection]["map"];
	}

	return (
		<StyledView>
			{map ? (
				<Form map={map} select={select} />
			) : (
				<StyledText>{selections.length}</StyledText>
			)}
		</StyledView>
	);
};

export default Main;
