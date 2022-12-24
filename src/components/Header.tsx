import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Feel</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {},
	text: {
		fontSize: 32,
	},
});
