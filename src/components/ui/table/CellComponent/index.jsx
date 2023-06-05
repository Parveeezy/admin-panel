import React from 'react';
import { Description, CellWrapper } from './components';

const CellComponent = ({ children, ...props }) => {
    return (
        <CellWrapper {...props}>
            {children}
            {/*{cell.map(el => {*/}
            {/*    return (*/}
            {/*        <Description>*/}
            {/*            {el.title}*/}
            {/*        </Description>*/}
            {/*    );*/}
            {/*})}*/}
        </CellWrapper>
    );
};

export default CellComponent;