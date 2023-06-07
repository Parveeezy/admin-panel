import React, { useMemo } from 'react';
import TableComponent from '../../ui/table/TableComponent';
import { Wrapper } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus, statuses } from '../../../store/moderators/moderatorsSlice';

const fields = [
    { fieldName: 'id', title: '', style: { maxWidth: 80 } },
    { fieldName: 'img', title: '', style: { maxWidth: 80 } },
    { fieldName: 'name', title: 'Ф.И.О.' },
    { fieldName: 'status', title: 'Статус', getData: (data) => statuses[data.status] },
];

const ModeratorsTableComponent = () => {
    const { moderatorsList, moderatorFilteredId, currentPage } = useSelector(state => state.moderators);
    const dispatch = useDispatch();

    const handleActionSelectChange = (index, value) => {
        dispatch(changeStatus({ index, value }));
    };

    const list = useMemo(() => {
        if (moderatorFilteredId) {
            return moderatorsList.filter(item => item.name.replace(/ /g,'').toLowerCase().includes(moderatorFilteredId.toLowerCase())).slice((currentPage - 1) * 10, currentPage * 10);
        }

        return moderatorsList.slice((currentPage - 1) * 10, currentPage * 10);
    }, [moderatorsList, moderatorFilteredId, currentPage]);

    return (
        <Wrapper>
            <TableComponent
                fields={fields}
                rows={list}
                btn={{ message: 'Выбрать статус', variant: 'outlined' }}
                actions={[
                    {
                        type: 'select',
                        field: 'status',
                        options: [
                            { title: 'Назначить', value: 'active' },
                            { title: 'Удалить', value: 'deleted' },
                            { title: 'Остановить', value: 'stopped' },
                        ],
                        label: 'Выбрать статус',
                        onChange: handleActionSelectChange,
                    }
                ]}
            />
        </Wrapper>
    );
};

export default ModeratorsTableComponent;