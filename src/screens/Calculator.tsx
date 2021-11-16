import { Line, Lines } from '../components/Buttons';
import { Text, View } from 'react-native';

import { CalcButton } from '../components/CalcButton';
import React from 'react'
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const Calulator = () => {
    const calcHook = useCalculator();
    const { number, previousNumber, focus } = calcHook;

    const renderButtons = (line: Line, i: number) => {
        return (
            <View style={styles.line} key={i}>
                {line.buttons.map(({ text, color, colSpan, action, operator }, i) => {
                    return <CalcButton
                        text={text}
                        color={color}
                        colSpan={colSpan}
                        key={i}
                        action={action}
                        focus={focus(operator)} />
                })}
            </View>
        )
    }

    return (
        <View style={styles.calculatorContainer}>
            {
                (previousNumber !== '0') &&
                <Text style={styles.smallResult}>{previousNumber}</Text>
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{number}</Text>
            {
                Lines(calcHook).map((line, i) => {
                    return renderButtons(line, i)
                })
            }
        </View>
    )
}