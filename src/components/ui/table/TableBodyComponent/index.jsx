import React from 'react';
import { TableBody } from '@mui/material';
import RowComponent from '../RowComponent';
import CellComponent from '../CellComponent';
import SelectComponent from '../../SelectComponent';

const TableBodyComponent = ({ rows, fields }) => {
    return (
        <TableBody>
            {rows.map(row => (
                <RowComponent row={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {fields.map((field, index) => (
                        <CellComponent {...field}>
                            {row[field.fieldName]}
                            <SelectComponent variant='outlined' text={'search'}/>
                        </CellComponent>
                    ))}
                </RowComponent>
            ))}
        </TableBody>
    );
};

export default TableBodyComponent;