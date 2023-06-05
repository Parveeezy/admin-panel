import React from 'react';
import TableComponent from '../../ui/table/TableComponent';
import { PersonImg } from '../../ui/table/RowComponent/components';
import { Wrapper } from './components';

const moderators = [
    {
        id: 1,
        name: 'Александр Сергеевич Пушкин',
        img: <PersonImg />,
        status: 'Активный',
    }, {
        id: 2,
        name: 'Антон Павлович Чехов',
        img: <PersonImg />,
        status: 'Приостановлен',
    }, {
        id: 3,
        name: 'Лев Николаевич Толстой',
        img: <PersonImg />,
        status: 'Удалён',
    },
];

const fields = [
    { fieldName: 'id', title: '', style: { maxWidth: 80 } },
    { fieldName: 'img', title: '', style: { maxWidth: 80 } },
    { fieldName: 'name', title: 'Ф.И.О.' },
    { fieldName: 'status', title: 'Статус' },
    { fieldName: 'actions', title: '', style: { borderBottomColor: 'transparent' } },
];

const ModeratorsTableComponent = () => {
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