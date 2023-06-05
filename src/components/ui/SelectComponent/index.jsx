import React, { useState } from 'react';
import { ButtonUi } from '../ButtonComponent';
import { StyledMenu, StyledMenuItem } from './components';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { HeaderProfileMenuButton } from '../../Header/components';

const status = {
    set: 'назначить',
    stop: 'Приостановить',
    delete: 'Удалить',
};

const SelectComponent = ({ text }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ButtonUi>
            <StyledMenu
                id='demo-positioned-menu'
                aria-labelledby='demo-positioned-button'
                anchorEl={anchorEl}
                open={open}
                onClick={handleClick}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <StyledMenuItem onClick={handleClose}>ddddddddddddddddddddddddf</StyledMenuItem>
            </StyledMenu>
        </ButtonUi>
    );
};

export default SelectComponent;