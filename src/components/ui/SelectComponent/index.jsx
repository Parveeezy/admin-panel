import React, { useState } from 'react';
import { ButtonComponent } from '../ButtonComponent';
import { StyledMenu, StyledMenuItem } from './components';
import { Button } from '@mui/material';

const status = {
    set: 'назначить',
    stop: 'Приостановить',
    delete: 'Удалить',
};

const SelectComponent = ({ text, variant }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(!openMenu);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    return (
        <>
            <ButtonComponent
                id='demo-positioned-button'
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disableRipple
                variant={variant}
                text={text}
            >
                {text}
            </ButtonComponent>

            <StyledMenu
                id='demo-positioned-menu'
                aria-labelledby='demo-positioned-button'
                anchorEl={anchorEl}
                open={open}
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
                <StyledMenuItem onClick={handleClose}>Profile</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>My account</StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
            </StyledMenu>
        </>
    );
};

export default SelectComponent;