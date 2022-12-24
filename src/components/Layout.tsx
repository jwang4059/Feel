import React from "react";
import styled from "styled-components/native";

interface LayoutProps {
	children: React.ReactNode;
}

const StyledView = styled.View`
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: 64px;
`;

const Layout = ({ children }: LayoutProps) => {
	return <StyledView>{children}</StyledView>;
};

export default Layout;
