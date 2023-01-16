import React, { useState } from "react";
import styled from "styled-components/native";
import Layout from "./src/components/Layout";
import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import Definition from "./src/components/Definition";
import { Emotion } from "./src/data/emotions";

const Drawer = styled.View`
	height: 100%;
	width: 180px;
	background-color: white;
	border-right-width: 1px;
	border-color: black;
	border-style: solid;
	position: absolute;
	margin-top: 48px;
	padding: 12px;
`;

const Container = styled.View`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
`;

export default function App() {
	const [selections, setSelections] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [emotion, setEmotion] = useState<Emotion | null>(null);

	return (
		<Layout>
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
			{isOpen && (
				<Drawer onTouchStart={() => setIsOpen(false)}>
					<Definition emotion={emotion} close={() => setIsOpen(false)} />
				</Drawer>
			)}
		</Layout>
	);
}
