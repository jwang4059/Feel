import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import InputButton from "./InputButton";
import { Emotion, EmotionMap } from "../data/emotions";

const StyledView = styled.View`
	height: 600px;
	width: 200px;
`;

const StyledFlatList = styled.FlatList`` as unknown as typeof FlatList;

interface FormProps {
	map: EmotionMap | null;
	select: (item: string) => void;
	setEmotion: (e: Emotion | null) => void;
	open: () => void;
}

const Form = ({ map, select, setEmotion, open }: FormProps) => {
	const data: string[] | null = map ? Object.keys(map) : null;

	return (
		<StyledView>
			<StyledFlatList
				data={data}
				renderItem={({ item }) => (
					<InputButton
						title={item}
						onPress={() => select(item)}
						onLongPress={() => {
							setEmotion(map ? map[item] : null);
							open();
						}}
					/>
				)}
			/>
		</StyledView>
	);
};

export default Form;
