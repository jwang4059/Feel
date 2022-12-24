import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

type Props = {
	data: string[];
	onPress: () => void;
};

const Form = (props: Props) => {
	return (
		<View>
			<FlatList
				style={styles.list}
				data={props.data}
				renderItem={({ item }: { item: string }) => (
					<Pressable style={styles.button} onPress={props.onPress}>
						<Text>{item}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
	list: {},
	button: {},
});
