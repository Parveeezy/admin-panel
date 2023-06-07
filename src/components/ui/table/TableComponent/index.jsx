import React from 'react';
import { Wrapper } from './components';
import TableHeadComponent from '../TableHeadComponent';
import TableBodyComponent from '../TableBodyComponent';

const TableComponent = ({ fields, rows, actions }) => {
    return (
        <Wrapper>
            <TableHeadComponent fields={fields} hasActions={!!actions} />
            <TableBodyComponent fields={fields} rows={rows} actions={actions} />
        </Wrapper>
    );
};

export default TableComponent;