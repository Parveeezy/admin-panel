import React from 'react';
import CellComponent from '../CellComponent';
import RowComponent from '../RowComponent';
import { Wrapper } from './components';


const TableComponent = ({ cell, row, btn }) => {
    return (
        <Wrapper>
            <CellComponent cell={cell} />
            <RowComponent row={row} btn={btn}/>
        </Wrapper>
    );
};

export default TableComponent;