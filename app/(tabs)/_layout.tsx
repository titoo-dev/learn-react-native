import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const ICON_SIZE = 24;

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#ffd33d',
				headerShadowVisible: false,
				headerTintColor: '#fff',
				headerStyle: {
					backgroundColor: '#25292e',
				},
				tabBarStyle: {
					backgroundColor: '#25292e',
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'home-sharp' : 'home-outline'}
							color={color}
							size={ICON_SIZE}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: 'About',
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={
								focused
									? 'information-circle'
									: 'information-circle-outline'
							}
							color={color}
							size={ICON_SIZE}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
