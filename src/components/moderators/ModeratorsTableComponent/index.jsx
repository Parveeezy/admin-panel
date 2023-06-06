import React from 'react';
import TableComponent from '../../ui/table/TableComponent';
import { Wrapper } from './components';
import SelectComponent from '../../ui/SelectComponent';
import { useSelector } from 'react-redux';

const fields = [
    { fieldName: 'id', title: '', style: { maxWidth: 80 } },
    { fieldName: 'img', title: '', style: { maxWidth: 80 } },
    { fieldName: 'name', title: 'Ф.И.О.' },
    { fieldName: 'status', title: 'Статус' },
    { fieldName: 'actions', title: '',  selectStatus: <SelectComponent variant='outlined' text={'Выбрать статус'} /> },
];

const ModeratorsTableComponent = () => {

    const moderators = useSelector(state => state.moderators)

    return (
        <Wrapper>
            <TableComponent
                fields={fields}
                rows={moderators}
                btn={{ message: 'Выбрать статус', variant: 'outlined' }}
            />
        </Wrapper>
    );
};

export default ModeratorsTableComponent;