import React from "react";
import styled from "styled-components/native";
import { EmotionMap } from "../data/emotions";
import InputButton from "./InputButton";

const StyledView = styled.View`
	display: flex;
	align-items: center;
`;

interface ResultProps {
	map: EmotionMap | null;
	selections: string[];
}

const Result = ({ map, selections }: ResultProps) => {
	const resultData = selections.map((x: string) => (
		<InputButton key={x} title={x} />
	));
	return <StyledView>{resultData}</StyledView>;
};

export default Result;
