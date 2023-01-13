import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
	height: 100%;
	width: 100%;
	padding-top: 48px;
`;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return <StyledView>{children}</StyledView>;
};

export default Layout;
