import React from "react";
import styled from "styled-components/native";

const LayoutColors = ["#171717", "#525252", "#d4d4d8", "#f4f4f5"];

const StyledView = styled.View`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	padding-top: 48px;
`;

interface LayoutProps {
	children: React.ReactNode;
	selections: string[];
}

const Layout = ({ children, selections }: LayoutProps) => {
	return (
		<StyledView style={{ backgroundColor: LayoutColors[selections.length] }}>
			{children}
		</StyledView>
	);
};

export default Layout;
