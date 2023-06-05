import React from 'react';
import {
    RowWrapper,
    HeadWrapper,
} from './components';

const RowComponent = ({ children, isHead, ...props }) => {
    if (isHead) {
        return <HeadWrapper>{children}</HeadWrapper>;
    }

    return (
        <RowWrapper {...props}>
            {children}
        </RowWrapper>
    );
};

export default RowComponent;