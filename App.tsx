import React, { useState } from "react";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Layout from "./src/components/Layout";
import Main from "./src/components/Main";

export default function App() {
	const [selections, setSelections] = useState<string[]>([]);

	return (
		<Layout>
			<Header />
			<Main
				selections={selections}
				select={(item) => setSelections([...selections, item])}
			/>
			{selections.length !== 0 && (
				<Footer selections={selections} setSelections={setSelections} />
			)}
		</Layout>
	);
}
