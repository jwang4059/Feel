import React, { useState } from "react";
import styled from "styled-components/native";
import Layout from "./src/components/Layout";
import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import Definition from "./src/components/Definition";
import { Emotion } from "./src/data/emotions";

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
	const [selections, setSelections] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [emotion, setEmotion] = useState<Emotion | null>(null);

	return (
		<Layout>
			{isOpen && (
				<Drawer>
					<Definition emotion={emotion} close={() => setIsOpen(false)} />
				</Drawer>
			)}
			<Container>
				<Header />
				<Main
					selections={selections}
					select={(item) => setSelections([...selections, item])}
					setEmotion={setEmotion}
					open={() => setIsOpen(true)}
				/>
				<Footer reset={() => setSelections([])} />
			</Container>
		</Layout>
	);
}
