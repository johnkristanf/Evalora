import { ThemedText } from '@/components/ThemedText'
import { Image, View } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper'

export default function Home() {
	return (
		<>
			<Appbar.Header
				style={{
					paddingHorizontal: 10,
					backgroundColor: '#6495ED',
				}}
			>
				<View className="flex-1">
					<View className="flex-row items-center">
						<Image
							source={require('@/assets/images/evalora_logo-removebg.png')}
							style={{
								width: 50,
								height: 50,
								tintColor: '#fff',
							}}
						/>

						<ThemedText  style={{color: '#fff', fontSize: 20}}>
							Evalora
						</ThemedText>
					</View>
				</View>

				<View className="flex-1 flex-row items-center justify-end gap-2">
					<Avatar.Image
						size={35}
						source={require('@/assets/images/user.png')}
					/>
				</View>
			</Appbar.Header>
		</>
	)
}
