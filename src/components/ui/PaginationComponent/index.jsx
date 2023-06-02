import React from 'react';
import { PaginationComponent } from './components';

const PaginationUi = (props) => {
    return <PaginationComponent count={props.count} variant={props.variant} shape={props.shape}/>
};

export default PaginationUi;