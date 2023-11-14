import React, { useState } from 'react';
import classes from './TextInput.module.css';


interface ITextInput {
    valid: boolean | null,
    callBack: (value: string) => void,
}

export default function TextInput({ valid: valid, callBack }: ITextInput) {

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        callBack(e.target.value)
    }

    let styleArr = [classes.inputClass]

    if (valid !== null && valid === false) {
        styleArr.push(classes.invalidValue)
    }

    return (
        <input
            className={styleArr.join(' ')}
            type="text"
            onChange={(e) => onChangeHandler(e)}
        />
    )
}
