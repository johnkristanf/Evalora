// components/CustomText.tsx
import { Text, TextProps } from 'react-native'

export function ThemedText(props: TextProps) {
	return (
		<Text
			{...props}
			style={[
				{ fontFamily: 'PoetsenOne-Regular' },
				props.style,
			]}
		/>
	)
}
