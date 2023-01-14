import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconButton from "./IconButton";
import { Emotion } from "../data/emotions";
import { View } from "react-native";

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
	emotion: Emotion | null;
	close: () => void;
}

const Definition = ({ emotion, close }: DefinitionProps) => {
	return (
		<StyledView>
			<IconButton onPress={close}>
				<Icon name={"close"} size={30} color={"#900"} />
			</IconButton>
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
