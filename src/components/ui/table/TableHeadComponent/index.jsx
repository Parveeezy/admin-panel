import React from 'react';
import { TableHead } from '@mui/material';
import RowComponent from '../RowComponent';
import CellComponent from '../CellComponent';

const TableHeadComponent = ({ fields }) => {
    return (
        <TableHead>
            <RowComponent>
                {fields.map(({ title, ...rest }, index) => (
                    <CellComponent key={index} variant='head' {...rest}>{title}</CellComponent>))}
            </RowComponent>
        </TableHead>
    );
};

export default TableHeadComponent;