import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import Button from "./Button";

const StyledView = styled.View`
	height: 600px;
	width: 200px;
`;

const StyledFlatList = styled.FlatList`` as unknown as typeof FlatList;

interface FormProps {
	data: string[] | null;
	select: (item: string) => void;
	open: () => void;
}

const Form = ({ data, select, open }: FormProps) => {
	return (
		<StyledView>
			<StyledFlatList
				data={data}
				renderItem={({ item }) => (
					<Button
						title={item}
						onPress={() => select(item)}
						onLongPress={open}
					/>
				)}
			/>
		</StyledView>
	);
};

export default Form;
