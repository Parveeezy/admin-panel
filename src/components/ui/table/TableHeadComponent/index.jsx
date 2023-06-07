import React from 'react';
import { TableHead } from '@mui/material';
import RowComponent from '../RowComponent';
import CellComponent from '../CellComponent';

const TableHeadComponent = ({ fields, hasActions }) => {
    return (
        <TableHead>
            <RowComponent>
                {fields.map(({ title, fieldName, getData, ...rest }) => (
                    <CellComponent key={fieldName} variant='head' {...rest}>{title}</CellComponent>))}
                {hasActions && <CellComponent variant='head' sx={{ borderBottomColor: 'transparent' }} />}
            </RowComponent>
        </TableHead>
    );
};

export default TableHeadComponent;