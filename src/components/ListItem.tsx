import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Emotion, EmotionMap } from "../data/emotions";
import Definition from "./Definition";
import InputButton from "./InputButton";

const StyledView = styled.View`
	width: 300px;
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`;

const Card = styled.View`
	width: 100%;
	display: flex;
	align-items: center;
`;

const CloseButton = styled.Pressable`
	border: 1px solid black;
	padding: 4px 12px;
`;

interface ListItemProps {
	map: EmotionMap | null;
	item: string;
	select: (item: string) => void;
}

const ListItem = ({ map, item, select }: ListItemProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const emotion: Emotion | null = map ? map[item] : null;

	return (
		<StyledView
			style={
				isOpen
					? {
							backgroundColor: "#fafafa",
							borderRadius: 4,
							padding: 8,
							marginBottom: 8,
					  }
					: null
			}
		>
			<InputButton
				title={item}
				onPress={() => {
					setIsOpen(false);
					select(item);
				}}
				onLongPress={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<Card>
					<Definition emotion={emotion} />
					<CloseButton onPress={() => setIsOpen(false)}>
						<Text>Close</Text>
					</CloseButton>
				</Card>
			)}
		</StyledView>
	);
};

export default ListItem;
