import { ThemedText } from '@/components/ThemedText'
import { colors } from '@/constant/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Image, Pressable, View } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper'
import { router } from 'expo-router'

export default function HomeScreen() {

	const handleOpenCamera = () => router.push('/camera')

	return (
		<View className="h-full" style={{ backgroundColor: colors.primary }}>
			<Appbar.Header
				style={{
					paddingHorizontal: 10,
					backgroundColor: 'transparent',
				}}
			>
				<View className="flex-1">
					<View className="flex-row items-center">
						<Image
							source={require('@/assets/images/evalora_logo-removebg.png')}
							style={{
								width: 50,
								height: 50,
								tintColor: colors.secondary,
							}}
						/>
					</View>
				</View>

				<View className="flex-1 flex-row items-center justify-end gap-2">
					<ThemedText className="text-lg text-white">John Kristan</ThemedText>
					<Avatar.Image size={35} source={require('@/assets/images/user.png')} />
				</View>
			</Appbar.Header>

			<View className="flex-col gap-1 pt-8 pl-5 h-40">
				<ThemedText className="text-3xl text-white">Welcome to Evalora!</ThemedText>

				<ThemedText className="text-sm text-white opacity-75">Streamlined, precise essay grading.</ThemedText>
			</View>

			<View className="flex-1 bg-white rounded-t-3xl ">
				<View className="h-12 flex-row justify-end pt-4 pr-2 opacity-75">
					<ThemedText style={{ color: colors.primary }} className="text-lg ">
						Pricing
					</ThemedText>

					<MaterialIcons size={28} name="arrow-right-alt" color={colors.primary} />
				</View>

				<View className="flex-1 p-6">
					<ThemedText style={{ color: colors.primary }} className="text-2xl">
						Grading Methods:
					</ThemedText>

					<ThemedText className="text-sm opacity-75" style={{ color: colors.primary }}>
						Capture a single essay photo or upload multiple for batch evaluation.
					</ThemedText>

					{/* GRADING METHOD BUTTONS */}
					<View className="flex-1 flex-col gap-5 mt-8">
						{/* CAMERA IMAGE PRESSABLE */}
						<Pressable onPress={handleOpenCamera}>
							<View
								className="flex-row items-center justify-between rounded-md p-3"
								style={{
									backgroundColor: colors.primary,
								}}
							>
								<View className="flex-col">
									<View className="flex-row items-center">
										<MaterialIcons size={24} name="camera-alt" color={colors.secondary} />
										<ThemedText className="text-2xl text-white ml-1">Camera</ThemedText>
									</View>
								</View>

								<MaterialIcons size={40} name="arrow-right-alt" color={colors.secondary} />
							</View>
						</Pressable>

						{/* UPLOAD IMAGE PRESSABLE */}
						<Pressable onPress={() => console.log('Camera option selected')}>
							<View
								className="flex-row items-center justify-between rounded-md p-3"
								style={{
									backgroundColor: colors.primary,
								}}
							>
								<View className="flex-col">
									<View className="flex-row items-center">
										<MaterialIcons size={24} name="file-upload" color={colors.secondary} />
										<ThemedText className="text-2xl text-white ml-1">Upload</ThemedText>
									</View>
								</View>

								<MaterialIcons size={40} name="arrow-right-alt" color={colors.secondary} />
							</View>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	)
}
