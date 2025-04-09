import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Edit app/index.tsx to edit this screen.
			</Text>
			<Link href="/about" style={styles.button}>
				Go to about screen
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	text: {
		color: '#fff',
	},
	button: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		backgroundColor: '#328E6E',
		borderRadius: 4,
	},
});
