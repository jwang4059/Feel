import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Emotion } from "../data/emotions";

const StyledView = styled.View`
	width: 100%;
	padding: 4px;
`;

const WordText = styled.Text`
	font-size: 20px;
	font-weight: 700;
`;

const PartOfSpeechText = styled.Text`
	font-size: 12px;
	font-style: italic;
	font-weight: 300;
`;

const DefinitionText = styled.Text``;

interface DefinitionProps {
	emotion: Emotion | null;
	close: () => void;
}

const Definition = ({ emotion }: DefinitionProps) => {
	return (
		<StyledView>
			{emotion && (
				<View>
					<WordText>{emotion.word}</WordText>
					<PartOfSpeechText>[{emotion.partOfSpeech}]</PartOfSpeechText>
					<DefinitionText>{emotion.definition}</DefinitionText>
				</View>
			)}
		</StyledView>
	);
};

export default Definition;
