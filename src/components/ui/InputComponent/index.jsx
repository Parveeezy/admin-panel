import React from 'react';

import { CustomInput } from './components';

const InputUi = ({ disablePortal, id, options, sx, renderInput }) => {
    return <CustomInput
        disablePortal={disablePortal}
        id={id}
        options={options}
        sx={sx}
        renderInput={renderInput}
    />;
};

export default InputUi;
