import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops! not found' }} />
			<View style={styles.container}>
				<Link href="/" style={styles.button}>
					Go back to home screen
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		backgroundColor: '#328E6E',
		borderRadius: 4,
	},
});
