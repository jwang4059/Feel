import React from "react";
import styled from "styled-components/native";

interface LayoutProps {
	children: React.ReactNode;
}

const StyledView = styled.View`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 64px;
`;

const Layout = ({ children }: LayoutProps) => {
	return <StyledView>{children}</StyledView>;
};

export default Layout;
