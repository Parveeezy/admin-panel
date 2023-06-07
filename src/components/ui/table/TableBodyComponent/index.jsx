import React from 'react';
import { TableBody } from '@mui/material';
import RowComponent from '../RowComponent';
import CellComponent from '../CellComponent';
import ActionCellComponent from '../ActionCellComponent';

const TableBodyComponent = ({ rows, fields, actions }) => {
    return (
        <TableBody>
            {rows.map((row, index) => (
                <RowComponent key={index} row={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {fields.map(({ fieldName, getData, ...rest }) => (
                        <CellComponent key={fieldName} {...rest}>
                            {getData ? getData(row) : row[fieldName]}
                        </CellComponent>
                    ))}

                    {!!actions && <ActionCellComponent actions={actions} values={row} index={index} />}
                </RowComponent>
            ))}
        </TableBody>
    );
};

export default TableBodyComponent;