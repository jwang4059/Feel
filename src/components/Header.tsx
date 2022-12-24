import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
	margin-bottom: 4px;
`;

const StyledText = styled.Text`
	font-size: 64px;
`;

const Header = () => {
	return (
		<StyledView>
			<StyledText>Feel</StyledText>
		</StyledView>
	);
};

export default Header;
