import { StyleSheet, View } from "react-native";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = (props: Props) => {
	return <View style={styles.container}>{props.children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		padding: 64,
	},
});
