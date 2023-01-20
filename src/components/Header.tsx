import React from "react";
import styled from "styled-components/native";

const HeaderColors = ["#f4f4f5", "#d4d4d8", "#525252", "#171717"];

const StyledView = styled.View`
	margin-bottom: 4px;
`;

const StyledText = styled.Text`
	font-size: 64px;
`;

interface HeaderProps {
	selections: string[];
}

const Header = ({ selections }: HeaderProps) => {
	return (
		<StyledView>
			<StyledText style={{ color: HeaderColors[selections.length] }}>
				Feel
			</StyledText>
		</StyledView>
	);
};

export default Header;
