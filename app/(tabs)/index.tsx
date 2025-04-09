import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
	const [selectedImage, setSelectedImage] = useState<string | undefined>(
		undefined
	);
	const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
		} else {
			alert('You did not select any image.');
		}
	};

	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		// we will implement this later
	};

	const onSaveImageAsync = async () => {
		// we will implement this later
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer
					imgSource={PlaceholderImage}
					selectedImage={selectedImage}
				/>
			</View>
			{showAppOptions ? (
				<View style={styles.optionsContainer}>
					<View style={styles.optionsRow}>
						<IconButton
							icon="refresh"
							label="Reset"
							onPress={onReset}
						/>
						<CircleButton onPress={onAddSticker} />
						<IconButton
							icon="save-alt"
							label="Save"
							onPress={onSaveImageAsync}
						/>
					</View>
				</View>
			) : (
				<View style={styles.footerContainer}>
					<Button
						onPress={pickImageAsync}
						theme="primary"
						label="Choose a photo"
					/>
					<Button
						onPress={() => setShowAppOptions(true)}
						label="Use this photo"
					/>
				</View>
			)}
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
	imageContainer: {
		flex: 1,
	},
	footerContainer: {
		flex: 1 / 3,
		alignItems: 'center',
	},
	optionsContainer: {
		position: 'absolute',
		bottom: 80,
	},
	optionsRow: {
		alignItems: 'center',
		flexDirection: 'row',
	},
});
