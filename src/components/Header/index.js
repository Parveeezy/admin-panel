import React from 'react';
import {
    HeaderContainer,
    HeaderLogo,
    HeaderLogoTitleBlock,
    HeaderProfile,
    HeaderProfileBlock,
    HeaderProfileMenuArrow, HeaderProfileMenuButton,
    HeaderRefreshButton,
    HeaderTitle,
} from './components';

const Header = () => {
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
                <HeaderProfile>
                    H
                </HeaderProfile>
                <HeaderProfileMenuButton>
                    <HeaderProfileMenuArrow/>
                </HeaderProfileMenuButton>
            </HeaderProfileBlock>


        </HeaderContainer>
    );
};

export default Header;