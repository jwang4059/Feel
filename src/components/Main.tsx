import React from "react";
import styled from "styled-components/native";
import emotions, { EmotionMap } from "../data/emotions";
import Form from "./Form";
import Result from "./Result";

const StyledView = styled.View`
	flex-grow: 1;
`;

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
				<Result map={emotions["map"]} selections={selections} />
			)}
		</StyledView>
	);
};

export default Main;
