import React from 'react';
import { PaginationComponent } from './components';

const PaginationUi = ({ count, variant, shape, onChange }) => {
    return <PaginationComponent
        count={count}
        variant={variant}
        shape={shape}
        onChange={onChange}
    />;
};

export default PaginationUi;