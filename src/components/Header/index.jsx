import React, { useState } from 'react';

import {
    HeaderContainer,
    HeaderLogo,
    HeaderLogoTitleBlock,
    HeaderProfile,
    HeaderProfileBlock,
    HeaderProfileMenu,
    HeaderProfileMenuArrow,
    HeaderProfileMenuButton,
    HeaderProfileMenuItems,
    HeaderTitle,
} from './components';
import { ButtonComponent } from '../ui/ButtonComponent';

const Header = () => {

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
        <HeaderContainer>
            <HeaderLogoTitleBlock>
                <HeaderLogo />
                <HeaderTitle>
                    LoGo
                </HeaderTitle>
            </HeaderLogoTitleBlock>
            <HeaderProfileBlock>
                <ButtonComponent
                    variant='outlined'
                    text={'refresh'}
                />

                <HeaderProfileMenuButton
                    id='demo-positioned-button'
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    disableRipple
                >
                    <HeaderProfile>
                        P
                    </HeaderProfile>

                    <HeaderProfileMenuArrow $openMenu={openMenu} />
                </HeaderProfileMenuButton>
                <HeaderProfileMenu
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
                    <HeaderProfileMenuItems onClick={handleClose}>Profile</HeaderProfileMenuItems>
                    <HeaderProfileMenuItems onClick={handleClose}>My account</HeaderProfileMenuItems>
                    <HeaderProfileMenuItems onClick={handleClose}>Logout</HeaderProfileMenuItems>
                </HeaderProfileMenu>
            </HeaderProfileBlock>
        </HeaderContainer>
    );
};

export default Header;