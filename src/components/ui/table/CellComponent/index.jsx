import React from 'react';
import { CellWrapper } from './components';

const CellComponent = ({ children, ...props }) => {
    return (
        <CellWrapper {...props}>
            {children}
        </CellWrapper>
    );
};

export default CellComponent;