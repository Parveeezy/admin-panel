import React, { useState } from 'react';
import { ButtonComponent } from '../ButtonComponent';
import { StyledMenu, StyledMenuItem } from './components';
import CheckboxUI from '../CheckboxComponent';

const status = [
    { name: 'Назначить', status: 'Активный' },
    { name: 'Удалить', status: 'Удалён' },
    { name: 'Остановить', status: 'Приостановлен' },
];

const SelectComponent = ({ text, variant }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                {status.map(el => {
                    return (
                        <StyledMenuItem onClick={handleClose}>
                            <CheckboxUI value={el.status}/>
                            {el.name}
                        </StyledMenuItem>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export default SelectComponent;