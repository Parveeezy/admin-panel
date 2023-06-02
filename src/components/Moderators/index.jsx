import React from 'react';
import { ModeratorsContainer, ModeratorsSearchBlock, ModeratorsTitle } from './components';
import PaginationUi from '../ui/PaginationComponent';
import InputUi from '../ui/InputComponent';
import { TextField } from '@mui/material';

const ModeratorsComponent = () => {

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: 'Schindler\'s List', year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ];

    return (
        <ModeratorsContainer>
            <ModeratorsTitle>Модераторы</ModeratorsTitle>
            <ModeratorsSearchBlock>

                <PaginationUi count={10} variant='outlined' shape='rounded' />
                <InputUi
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label='Movie' />} />


            </ModeratorsSearchBlock>
        </ModeratorsContainer>
    );
};

export default ModeratorsComponent;