import React from 'react';
import { NavbarContainer, NavbarItem, NavbarItemLink, NavbarItems } from './components';

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarItems>
                <NavbarItem>
                    <NavbarItemLink>Предложения</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink>Модераторы</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink>Обучение</NavbarItemLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarItemLink>Уведомления</NavbarItemLink>
                </NavbarItem>
            </NavbarItems>
        </NavbarContainer>
    );
};

export default Navbar;