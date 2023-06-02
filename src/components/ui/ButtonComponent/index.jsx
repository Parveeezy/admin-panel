import React from 'react';
import { CustomBtn } from './components';

export const ButtonUi = (props) => {
    return (
        <CustomBtn variant={props.variant}>
            {props.text}
        </CustomBtn>
    );
};