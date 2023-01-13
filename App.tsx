import React, { useState } from "react";
import Layout from "./src/components/Layout";
import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import Definition from "./src/components/Definition";

import styled from "styled-components/native";

const Drawer = styled.View`
	width: 180px;
	background-color: gray;
`;

const Container = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function App() {
	// const [selections, setSelections] = useState<string[]>([]);

	return (
		<Layout>
			<Drawer>
				<Definition
					word={"happy"}
					partOfSpeech={"adjective"}
					definition={"i am happy!"}
				/>
			</Drawer>
			{/* <Container>
				<Header />
				<Main
					selections={selections}
					select={(item) => setSelections([...selections, item])}
				/>
				<Footer reset={() => setSelections([])} />
			</Container> */}
		</Layout>
	);
}
