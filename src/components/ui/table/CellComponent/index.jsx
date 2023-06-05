import React from 'react';
import { Description, CellWrapper } from './components';

const CellComponent = ({ cell }) => {
    return (
        <CellWrapper>
            {cell.map(el => {
                return (
                    <Description>
                        {el.title}
                    </Description>
                );
            })}
        </CellWrapper>
    );
};

export default CellComponent;