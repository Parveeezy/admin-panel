import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { PersonImg } from '../../components/ui/table/RowComponent/components';

const initialState = [
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

export const moderatorsSlice = createSlice({
    name: 'moderators',
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const { changeStatus } = moderatorsSlice.actions;

export default moderatorsSlice.reducer;