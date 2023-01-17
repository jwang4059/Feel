import React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	padding-top: 48px;
	background-color: #171717;
`;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return <StyledView>{children}</StyledView>;
};

export default Layout;
