import React from "react";
import styled from "styled-components/native";
import Form from "./Form";

const StyledView = styled.View`
	flex-grow: 1;
`;

const StyledText = styled.Text``;

interface BodyProps {
	data: string[];
	selections: string[];
	select: (item: string) => void;
}

const Body = ({ data, selections, select }: BodyProps) => {
	return (
		<StyledView>
			{data ? (
				<Form data={data} select={select} />
			) : (
				<StyledText>{selections.length}</StyledText>
			)}
		</StyledView>
	);
};

export default Body;
