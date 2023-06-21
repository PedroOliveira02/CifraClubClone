import React from 'react';
import {  TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

export const InputLogin = ({ ...rest }: Props) => {
    return (
        <TextInput 
            {...rest}
        />
       
    )
}