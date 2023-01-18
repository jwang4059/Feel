import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Emotion } from "../data/emotions";
import Definition from "./Definition";
import InputButton from "./InputButton";

const StyledView = styled.View`
	width: 300px;
	display: flex;
	align-items: center;
	margin: 12px 0px;
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
	emotion: Emotion;
	select?: (item: string) => void;
}

const ListItem = ({ emotion, select }: ListItemProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
				title={emotion.word}
				onPress={() => {
					setIsOpen(false);
					if (select) select(emotion.word);
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
