import React, { useState } from "react";
import styled from "styled-components/native";
import { Emotion, EmotionMap } from "../data/emotions";
import Definition from "./Definition";
import InputButton from "./InputButton";

const StyledView = styled.View`
	width: 300px;
	display: flex;
	align-items: center;
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
							borderWidth: 1,
							borderColor: "black",
							borderStyle: "dotted",
							padding: 8,
							marginBottom: 8,
					  }
					: null
			}
		>
			<InputButton
				title={item}
				onPress={() => select(item)}
				onLongPress={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<Definition emotion={emotion} close={() => setIsOpen(false)} />
			)}
		</StyledView>
	);
};

export default ListItem;
