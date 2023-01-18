import React from "react";
import styled from "styled-components/native";
import emotions from "../data/emotions";
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
	return (
		<StyledView>
			{selections.length < 3 ? (
				<Form map={emotions} selections={selections} select={select} />
			) : (
				<Result map={emotions} selections={selections} />
			)}
		</StyledView>
	);
};

export default Main;
