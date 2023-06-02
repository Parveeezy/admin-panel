import React from 'react';
import { CustomInput } from './components';

const InputUi = (props) => {
    return <CustomInput
        disablePortal={props.disablePortal}
        id={props.id}
        options={props.options}
        sx={props.sx}
        renderInput={props.renderInput}
    />;
};

export default InputUi;