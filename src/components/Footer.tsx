import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconButton from "./IconButton";

const StyledView = styled.View`
	display: flex;
	flex-direction: row;
`;

interface FooterProps {
	reset: () => void;
}

const Footer = ({ reset }: FooterProps) => {
	return (
		<StyledView>
			<IconButton onPress={reset}>
				<Icon name={"restart"} size={30} color={"#f5f5f5"} />
			</IconButton>
		</StyledView>
	);
};

export default Footer;
