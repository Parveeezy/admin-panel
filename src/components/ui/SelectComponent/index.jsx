import React, { useState } from 'react';
import { ButtonComponent } from '../ButtonComponent';
import { StyledMenu, StyledMenuItem } from './components';
import CheckboxUI from '../CheckboxComponent';

const SelectComponent = ({ options, value, onChange, text, variant = 'outlined' }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (newValue) => {
        onChange(newValue);
        handleClose();
    }

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
                {options.map(el => {
                    return (
                        <StyledMenuItem key={el.value} onClick={() => handleChange(el.value)}>
                            <CheckboxUI checked={el.value === value}/>
                            {el.title}
                        </StyledMenuItem>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export default SelectComponent;