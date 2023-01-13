import React from "react";
import { Pressable, Text } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
	close: () => void;
}

const Definition = ({
	word,
	partOfSpeech,
	definition,
	close,
}: DefinitionProps) => {
	return (
		<StyledView>
			<Pressable onPress={close}>
				<Text>
					<Icon name={"close"} size={30} color={"#900"} />
				</Text>
			</Pressable>
			<WordText>{word}</WordText>
			<PartOfSpeechText>[{partOfSpeech}]</PartOfSpeechText>
			<DefinitionText>{definition}</DefinitionText>
		</StyledView>
	);
};

export default Definition;
