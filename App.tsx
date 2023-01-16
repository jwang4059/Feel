import React, { useState } from "react";
import styled from "styled-components/native";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Layout from "./src/components/Layout";
import Main from "./src/components/Main";

const Container = styled.View`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
`;

export default function App() {
	const [selections, setSelections] = useState<string[]>([]);

	return (
		<Layout>
			<Container>
				<Header />
				<Main
					selections={selections}
					select={(item) => setSelections([...selections, item])}
				/>
				<Footer reset={() => setSelections([])} />
			</Container>
		</Layout>
	);
}
