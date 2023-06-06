import React from 'react';
import PaginationUi from '../../ui/PaginationComponent';
import InputUi from '../../ui/InputComponent';
import { CustomTextField } from '../../ui/InputComponent/components';
import { ButtonComponent } from '../../ui/ButtonComponent';
import { SearchBlock, Title, Wrapper } from './components';

const moderatorsList = [
    { label: 'Александр Сергеевич Пушкин' },
    { label: 'Антон Павлович Чехов' },
    { label: 'Лев Николаевич Толстой' },
];

const ModeratorsHeaderComponent = () => {


    return (
        <Wrapper>
            <Title>Модераторы</Title>
            <SearchBlock>

                <PaginationUi count={10} variant='outlined' shape='rounded' />
                <InputUi
                    disablePortal
                    id='combo-box-demo'
                    options={moderatorsList}
                    sx={{ width: '55%' }}
                    renderInput={(params) => <CustomTextField {...params} label='Поиск...' />}
                />
                <ButtonComponent variant='outlined' text='Добавить' />
            </SearchBlock>
        </Wrapper>
    );
};

export default ModeratorsHeaderComponent;