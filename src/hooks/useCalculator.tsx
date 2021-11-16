import { useRef, useState } from 'react'

export enum Operations {
    add, substract, multiply, divide
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('')

    const latestOperation = useRef<Operations>()

    const clean = () => {
        (number == '0')
            ?
            setPreviousNumber('0')
            :
            setNumber('0');
    }

    const createNumber = (textNumber: string = "") => {
        if (number.includes('.') && textNumber == '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (textNumber === '.') {
                setNumber(number + textNumber);
                // Evaluate if it is another zero
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number)
            } else {
                setNumber(number + textNumber)
            }



        } else {
            setNumber(number + textNumber)
        }

    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number)
        }
    }

    const deleteLast = () => {
        if (number.length == 1 || (number.length == 2 && number.includes('-'))) {
            setNumber('0')
            return
        }
        setNumber(number.substring(0, number.length - 1))
    }

    const changePreviousNumber = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0')
    }

    const divideBtn = () => {
        changePreviousNumber()
        latestOperation.current = Operations.divide
    }

    const multiplyBtn = () => {
        changePreviousNumber()
        latestOperation.current = Operations.multiply
    }

    const substractBtn = () => {
        changePreviousNumber()
        latestOperation.current = Operations.substract
    }

    const addBtn = () => {
        changePreviousNumber()
        latestOperation.current = Operations.add
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(previousNumber);

        switch (latestOperation.current) {
            case Operations.add:
                setNumber(`${num1 + num2}`);
                break;
            case Operations.substract:
                setNumber(`${num2 - num1}`);
                break;
            case Operations.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operations.divide:
                if (num1 === 0) {
                    setNumber("Error")
                } else {
                    setNumber(`${num2 / num1}`);
                }
                break;
        }
        setPreviousNumber('0');
    }

    const focus = (operator: Operations | undefined) => {
        if (operator) {
            return latestOperation.current == operator
        }
        return false
    }

    return ({
        number,
        previousNumber,
        clean,
        createNumber,
        positiveNegative,
        deleteLast,
        changePreviousNumber,
        divideBtn,
        multiplyBtn,
        substractBtn,
        addBtn,
        calculate,
        focus
    })
}

export type UseCalculator = {
    clean: () => void,
    createNumber: () => void,
    positiveNegative: () => void,
    deleteLast: () => void,
    changePreviousNumber: () => void,
    multiplyBtn: () => void,
    divideBtn: () => void,
    substractBtn: () => void,
    addBtn: () => void,
    calculate: () => void
}
