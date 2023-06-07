import React from 'react';
import PaginationUi from '../../ui/PaginationComponent';
import InputUi from '../../ui/InputComponent';
import { CustomTextField } from '../../ui/InputComponent/components';
import { SearchBlock, Title, Wrapper } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { changeModeratorFilteredId, changePage, setTableLength } from '../../../store/moderators/moderatorsSlice';
import { ModalComponent } from '../../ui/ModalComponent';
import { Search } from '@mui/icons-material';

const ModeratorsHeaderComponent = () => {

    const { moderatorsList } = useSelector(state => state.moderators);
    const dispatch = useDispatch();

    const onChangeInputValue = (event) => {
        dispatch(changeModeratorFilteredId(event.target.value));
    };

    const onSetModeratorsLength = () => {
        dispatch(setTableLength(moderatorsList.length - 1));
    };

    const handleChangePagination = (e, page) => {
        dispatch(changePage(page));
    };

    return (
        <Wrapper>
            <Title>Модераторы</Title>
            <SearchBlock>

                <PaginationUi
                    count={Math.ceil(moderatorsList.length / 10)}
                    variant='outlined'
                    shape='rounded'
                    onChange={handleChangePagination}
                />
                <CustomTextField label='Поиск...' InputProps={{ endAdornment: <Search /> }} onChange={onChangeInputValue} style={{marginLeft: '10px', marginRight: '10px'}} />
                <ModalComponent />
            </SearchBlock>
        </Wrapper>
    );
};

export default ModeratorsHeaderComponent;