import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { PersonImg } from '../../components/ui/table/RowComponent/components';

export const statuses = {
    active: 'Активный',
    stopped: 'Приостановлен',
    deleted: 'Удален',
};

const moderatorsArray = [
    {
        id: 1,
        name: 'Александр Сергеевич Пушкин',
        img: <PersonImg />,
        status: 'active',
    }, {
        id: 2,
        name: 'Антон Павлович Чехов',
        img: <PersonImg />,
        status: 'stopped',
    }, {
        id: 3,
        name: 'Лев Николаевич Толстой',
        img: <PersonImg />,
        status: 'deleted',
    }, {
        id: 4,
        name: 'Александр Сергеевич Пушкин',
        img: <PersonImg />,
        status: 'active',
    }, {
        id: 5,
        name: 'Антон Павлович Чехов',
        img: <PersonImg />,
        status: 'stopped',
    }, {
        id: 6,
        name: 'Лев Николаевич Толстой',
        img: <PersonImg />,
        status: 'deleted',
    }, {
        id: 7,
        name: 'Александр Сергеевич Пушкин',
        img: <PersonImg />,
        status: 'active',
    }, {
        id: 8,
        name: 'Антон Павлович Чехов',
        img: <PersonImg />,
        status: 'stopped',
    }, {
        id: 9,
        name: 'Лев Николаевич Толстой',
        img: <PersonImg />,
        status: 'deleted',
    }, {
        id: 10,
        name: 'Александр Сергеевич Пушкин',
        img: <PersonImg />,
        status: 'active',
    }, {
        id: 11,
        name: 'Антон Павлович Чехов',
        img: <PersonImg />,
        status: 'stopped',
    }, {
        id: 12,
        name: 'Лев Николаевич Толстой',
        img: <PersonImg />,
        status: 'deleted',
    },
];

export const moderatorsSlice = createSlice({
    name: 'moderators',
    initialState: {
        moderatorsList: moderatorsArray,
        moderatorFilteredId: null,
        currentPage: 1,
    },
    reducers: {
        addModerator: (state, action) => {
            const newModerator = {
                id: action.payload.id,
                name: action.payload.name,
                img: action.payload.img,
                status: action.payload.status,

            };
            state.moderatorsList.push(newModerator);
        },
        changeStatus: (state, action) => {
            state.moderatorsList[action.payload.index].status = action.payload.value;
        },
        changeModeratorFilteredId: (state, action) => {
            state.moderatorFilteredId = action.payload;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
});

export const { changeStatus, changeModeratorFilteredId, addModerator, setTableLength, changePage } = moderatorsSlice.actions;

export default moderatorsSlice.reducer;