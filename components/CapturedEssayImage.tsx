import { colors } from '@/constant/colors'
import { useState } from 'react'
import { Image, Pressable, View } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper'
import { Dropdown } from 'react-native-paper-dropdown'
import { ThemedText } from './ThemedText'

export default function CapturedEssayImage({ imageURI }: { imageURI: string }) {
	console.log('imageURI: ', imageURI)

	const OPTIONS = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
		{ label: 'Other', value: 'other' },
	]

	const [gender, setGender] = useState<string>()

	console.log('gender: ', gender)

	const handleSubmitEssay = () => {
		console.log('gender: ', gender)
	}

	return (
		<View className="flex-1" style={{ backgroundColor: colors.primary }}>
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

			{/* CAPTURE IMAGE */}
			<View className="flex-1 " style={{ marginHorizontal: 8, marginTop: 16 }}>
				<Image source={{ uri: imageURI }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
			</View>

			{/* GRADING RUBRICS SELECTION AREA */}
			<View className="bg-white rounded-t-3xl mt-8 pt-4 w-full" style={{ paddingHorizontal: 20, minHeight: 300 }}>
				<View className="flex-col gap-3 ">
					<ThemedText className="text-2xl text-center" style={{ color: colors.primary }}>
						Select grading rubric:
					</ThemedText>

					<ThemedText className="text-sm text-center opacity-75" style={{ color: colors.primary }}>
						The grading process will proceed according to the criteria defined in the selected rubric.
					</ThemedText>
				</View>

				<View className="flex-col gap-5 mt-8">
					<View className="w-full mb-4 ">
						<Dropdown label="Gender" placeholder="Select Gender" options={OPTIONS} value={gender} onSelect={setGender} />
					</View>

					<Pressable
						onPress={handleSubmitEssay}
						className="py-3 w-full items-center  p-6 rounded-md"
						style={{ backgroundColor: colors.primary }}
					>
						<ThemedText className="text-white font-semibold text-base">Start Grading</ThemedText>
					</Pressable>
				</View>
			</View>
		</View>
	)
}
