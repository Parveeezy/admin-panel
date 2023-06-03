import React from 'react';
import { NavbarContainer, NavbarItem, NavbarItemLink, NavbarItems } from './components';

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarItems>
                <NavbarItem>
                    <NavbarItemLink to={'/offers'}>Предложения</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink to={'/moderators'}>Модераторы</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink to={'/classes'}>Обучение</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink to={'/notifications'}>Уведомления</NavbarItemLink>
                </NavbarItem>
            </NavbarItems>
        </NavbarContainer>
    );
};

export default Navbar;