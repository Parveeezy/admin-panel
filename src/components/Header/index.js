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
    HeaderRefreshButton,
    HeaderTitle,
} from './components';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(!openMenu)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false)
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
                <HeaderRefreshButton variant='outlined'>
                    Refresh
                </HeaderRefreshButton>

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

                    <HeaderProfileMenuArrow openMenu={openMenu}/>
                </HeaderProfileMenuButton>
                <HeaderProfileMenu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
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