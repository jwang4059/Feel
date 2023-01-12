import React, { useState } from "react";
import Layout from "./src/components/Layout";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

export default function App() {
	const [selections, setSelections] = useState<string[]>([]);

	// let map = emotions;
	// for (const selection of selections) {
	// 	map = map[selection];
	// }

	// const data = map ? Object.keys(map) : [];

	return (
		<Layout>
			<Header />
			<Body
				selections={selections}
				select={(item) => setSelections([...selections, item])}
			/>
			<Footer reset={() => setSelections([])} />
		</Layout>
	);
}
