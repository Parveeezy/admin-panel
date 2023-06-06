import React from 'react';
import { Wrapper } from './components';
import TableHeadComponent from '../TableHeadComponent';
import TableBodyComponent from '../TableBodyComponent';

const TableComponent = ({ fields, rows }) => {
    return (
        <Wrapper>
            <TableHeadComponent fields={fields} />
            <TableBodyComponent fields={fields} rows={rows} />
        </Wrapper>
    );
};

export default TableComponent;