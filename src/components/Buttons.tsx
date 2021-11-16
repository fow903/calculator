import { Operations, UseCalculator, useCalculator } from '../hooks/useCalculator';

import React from 'react'

export interface Line {
    buttons: Array<Button>
}
export interface Button {
    color?: string,
    text: string,
    colSpan?: number,
    action: () => void | undefined,
    operator?: Operations;
}
export const Lines = (calcHook: UseCalculator): Array<Line> => {
    const {
        clean,
        createNumber,
        positiveNegative,
        deleteLast,
        divideBtn,
        multiplyBtn,
        substractBtn,
        addBtn,
        calculate
    } = calcHook;

    let lines: Array<Line> = [
        {
            buttons: [
                {
                    text: 'C',
                    color: '#9b9b9b',
                    action: clean
                },
                {
                    text: '+/-',
                    color: '#9b9b9b',
                    action: positiveNegative
                },
                {
                    text: 'del',
                    color: '#9b9b9b',
                    action: deleteLast
                },
                {
                    text: '/',
                    color: '#ff9427',
                    action: divideBtn,
                    operator: Operations.divide,
                }
            ]
        },
        {
            buttons: [
                {
                    text: '7',
                    action: createNumber
                },
                {
                    text: '8',
                    action: createNumber
                },
                {
                    text: '9',
                    action: createNumber
                },
                {
                    text: 'X',
                    color: '#ff9427',
                    action: multiplyBtn,
                    operator: Operations.multiply
                }

            ]
        },
        {
            buttons: [
                {
                    text: '4',
                    action: createNumber
                },
                {
                    text: '5',
                    action: createNumber
                },
                {
                    text: '6',
                    action: createNumber
                },
                {
                    text: '-',
                    color: '#ff9427',
                    action: substractBtn,
                    operator: Operations.substract
                }

            ]
        },
        {
            buttons: [
                {
                    text: '1',
                    action: createNumber
                },
                {
                    text: '2',
                    action: createNumber
                },
                {
                    text: '3',
                    action: createNumber
                },
                {
                    text: '+',
                    color: '#ff9427',
                    action: addBtn,
                    operator: Operations.add
                }

            ]
        },
        {
            buttons: [
                {
                    text: '0',
                    colSpan: 1,
                    action: createNumber
                },
                {
                    text: '.',
                    action: createNumber
                },
                {
                    text: '=',
                    color: '#ff9427',
                    action: calculate
                }

            ]
        }
    ]
    return lines
}
