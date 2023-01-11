import React from "react";
import styled from "styled-components/native";
import ResetButton from "./ResetButton";

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
			<ResetButton onPress={reset} />
		</StyledView>
	);
};

export default Footer;
