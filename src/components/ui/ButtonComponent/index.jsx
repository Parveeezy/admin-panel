import React from 'react';
import { CustomBtn } from './components';

export const ButtonComponent = ({ variant, text }) => {
    return (
        <CustomBtn variant={variant}>
            {text}
        </CustomBtn>
    );
};