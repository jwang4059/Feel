import { StyleSheet, View } from "react-native";
import React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return <View style={styles.container}>{children}</View>;
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
