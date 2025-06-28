import CapturedEssayImage from '@/components/CapturedEssayImage'
import { colors } from '@/constant/colors'
import { apiV1 } from '@/lib/api'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useMutation } from '@tanstack/react-query'
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera'
import { useRef, useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function CameraScreen() {
	const [permission, requestPermission] = useCameraPermissions()
	const [facing, setFacing] = useState<CameraType>('back')
	const [imageURI, setImageURI] = useState<string | null>(null)
	const cameraRef = useRef<CameraView>(null)

	function toggleCameraFacing() {
		setFacing((current) => (current === 'back' ? 'front' : 'back'))
	}

	

	const takePicture = async () => {
		const photo = await cameraRef.current?.takePictureAsync({
			base64: false,
			skipProcessing: true,
		})

		if (!photo?.uri) return

		setImageURI(photo?.uri)

		
	}

	if (!permission) return null

	if (!permission.granted) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>We need your permission to show the camera</Text>
				<Button onPress={requestPermission} title="Grant Permission" />
			</View>
		)
	}

	if (imageURI) {
		return <CapturedEssayImage imageURI={imageURI} />
	}

	return (
		<CameraView style={styles.camera} facing={facing} ref={cameraRef}>
			<View style={styles.controls}>
				<View></View>

				<Pressable onPress={takePicture}>
					{({ pressed }) => (
						<View style={[styles.shutterBtn, { opacity: pressed ? 0.5 : 1 }]}>
							<View style={styles.shutterBtnInner} />
						</View>
					)}
				</Pressable>

				<TouchableOpacity onPress={toggleCameraFacing}>
					<MaterialIcons size={40} name="screen-rotation-alt" color={colors.secondary} />
				</TouchableOpacity>
			</View>
		</CameraView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	camera: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	message: {
		textAlign: 'center',
		paddingBottom: 10,
	},

	controls: {
		position: 'absolute',
		bottom: 40,
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingHorizontal: 30,
	},

	shutterBtn: {
		backgroundColor: 'transparent',
		borderWidth: 5,
		borderColor: 'white',
		width: 85,
		height: 85,
		borderRadius: 45,
		alignItems: 'center',
		justifyContent: 'center',
	},

	shutterBtnInner: {
		width: 70,
		height: 70,
		borderRadius: 50,
		backgroundColor: 'white',
	},
})
