import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconButton from "./IconButton";

const StyledView = styled.View`
	display: flex;
	flex-direction: row;
`;

interface FooterProps {
	selections: string[];
	setSelections: (item: string[]) => void;
}

const Footer = ({ selections, setSelections }: FooterProps) => {
	return (
		<StyledView>
			<IconButton
				onPress={() =>
					setSelections(selections.slice(0, selections.length - 1))
				}
			>
				<Icon name={"undo"} size={30} color={"#f5f5f5"} />
			</IconButton>
			<IconButton onPress={() => setSelections([])}>
				<Icon name={"restart"} size={30} color={"#f5f5f5"} />
			</IconButton>
		</StyledView>
	);
};

export default Footer;
