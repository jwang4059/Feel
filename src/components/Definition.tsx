import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
	height: 100%;
	width: 100%;
	padding: 12px;
	background-color: teal;
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
	word: string;
	partOfSpeech: string;
	definition: string;
}

const Definition = ({ word, partOfSpeech, definition }: DefinitionProps) => {
	return (
		<StyledView>
			<WordText>{word}</WordText>
			<PartOfSpeechText>[{partOfSpeech}]</PartOfSpeechText>
			<DefinitionText>{definition}</DefinitionText>
		</StyledView>
	);
};

export default Definition;
