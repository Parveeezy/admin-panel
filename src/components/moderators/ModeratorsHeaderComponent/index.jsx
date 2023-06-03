import React from 'react';
import PaginationUi from '../../ui/PaginationComponent';
import InputUi from '../../ui/InputComponent';
import { CustomTextField } from '../../ui/InputComponent/components';
import { ButtonUi } from '../../ui/ButtonComponent';
import { SearchBlock, Title, Wrapper } from './components';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: 'Schindler\'s List', year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
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
                    options={top100Films}
                    sx={{ width: '55%' }}
                    renderInput={(params) => <CustomTextField {...params} label='Поиск...' />}
                />
                <ButtonUi variant='outlined' text='Добавить' />
            </SearchBlock>
        </Wrapper>
    );
};

export default ModeratorsHeaderComponent;