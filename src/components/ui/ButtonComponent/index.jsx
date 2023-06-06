import React from 'react';
import { CustomBtn } from './components';

export const ButtonComponent = ({ text, ...props }) => {
    return (
        <CustomBtn {...props}>
            {text}
        </CustomBtn>
    );
};