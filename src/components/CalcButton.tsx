import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styles } from '../theme/appTheme'

interface Props {
    text: string,
    color?: string,
    colSpan?: number,
    action: (textNumber: string) => void,
    focus?: boolean;
}

export const CalcButton = ({ text, color = "#2d2d2d", colSpan = 0, action, focus }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: (focus) ? 'white' : color,
                width: (colSpan == 1) ? 180 : 80,

            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: (color == '#9b9b9b') ? 'black' : (focus) ? color : 'white',
                    textAlign: (colSpan == 1) ? 'left' : 'center',
                    paddingLeft: (colSpan == 1) ? 20 : 10,
                }}>{text}</Text>
            </View >
        </TouchableOpacity>
    )
}
