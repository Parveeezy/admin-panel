import React from 'react';
import TableComponent from '../../ui/table/TableComponent';

const moderators = [
    {
        id: 1,
        name: 'Александр Сергеевич Пушкин',
        img: 'A',
        status: 'Активный',
    }, {
        id: 2,
        name: 'Антон Павлович Чехов',
        img: 'A',
        status: 'Приостановлен',
    }, {
        id: 3,
        name: 'Лев Николаевич Толстой',
        img: 'L',
        status: 'Удалён',
    },
];

const ModeratorsTableComponent = () => {
    return (
        <TableComponent
            cell={[{ title: 'Ф.И.О.' }, { title: 'Статус' }]}
            row={moderators}
            btn={{ message: 'Выбрать статус', variant: 'outlined' }}
        />
    );
};

export default ModeratorsTableComponent;