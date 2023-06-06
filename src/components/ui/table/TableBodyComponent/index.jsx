import React from 'react';
import { TableBody } from '@mui/material';
import RowComponent from '../RowComponent';
import CellComponent from '../CellComponent';

const TableBodyComponent = ({ rows, fields }) => {
    return (
        <TableBody>
            {rows.map((row, index) => (
                <RowComponent key={index} row={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {fields.map((field, index) => (
                        <CellComponent {...field}>
                            {row[field.fieldName]}
                            {field.selectStatus}
                        </CellComponent>
                    ))}
                </RowComponent>
            ))}
        </TableBody>
    );
};

export default TableBodyComponent;