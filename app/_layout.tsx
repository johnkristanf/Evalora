import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import './globals.css'

export default function RootLayout() {
	const colorScheme = useColorScheme()

	const [loaded] = useFonts({
		'PoetsenOne-Regular': require('@/assets/fonts/PoetsenOne-Regular.ttf'),
	})

	if (!loaded) {
		// Async font loading only occurs in development.
		return null
	}

	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<SafeAreaProvider>
					<PaperProvider>
						<Stack>
							<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

							<Stack.Screen name="camera" options={{ headerShown: false }} />
						</Stack>
					</PaperProvider>
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	)
}
