import React from "react";
import styled from "styled-components/native";
import Form from "./Form";
import emotions, { Emotion, EmotionMap } from "../data/emotions";

const StyledView = styled.View`
	flex-grow: 1;
`;

const StyledText = styled.Text``;

interface MainProps {
	selections: string[];
	select: (item: string) => void;
	setEmotion: (e: Emotion | null) => void;
	open: () => void;
}

const Main = ({ selections, select, setEmotion, open }: MainProps) => {
	let map: EmotionMap | null = emotions["map"];
	for (const selection of selections) {
		if (map) map = map[selection]["map"];
		else map = null;
	}

	return (
		<StyledView>
			{map ? (
				<Form map={map} select={select} setEmotion={setEmotion} open={open} />
			) : (
				<StyledText>{selections.length}</StyledText>
			)}
		</StyledView>
	);
};

export default Main;
