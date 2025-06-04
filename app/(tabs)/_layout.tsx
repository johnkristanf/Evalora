import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { colors } from '@/constant/colors'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor:
					colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarStyle: {
					marginBottom: 60,
					borderRadius: 20,
					height: 70,
					marginHorizontal: 30,
					position: 'absolute'
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<IconSymbol
							size={28}
							name="house.fill"
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="grade"
				options={{
					title: 'Grade',
					tabBarIcon: ({ color }) => (
						<IconSymbol
							size={28}
							name="star.square.fill"
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
