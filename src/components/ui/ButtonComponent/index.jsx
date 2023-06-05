import React from 'react';
import { CustomBtn } from './components';

export const ButtonUi = ({ variant, text }) => {
    return (
        <CustomBtn variant={variant}>
            {text}
        </CustomBtn>
    );
};