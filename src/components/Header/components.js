import styled, { keyframes } from 'styled-components';
import { Avatar, Button, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const HeaderContainer = styled('header')(() => ({
    height: 70,
    backgroundColor: '#3c3c3c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
}));

export const HeaderLogoTitleBlock = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 20,
}));

export const HeaderLogo = styled('div')(() => ({
    width: 35,
    height: 35,
    backgroundColor: 'red',
    marginRight: 5,
    borderRadius: 5,
}));

export const HeaderTitle = styled('p')(() => ({
    fontSize: 24,
    color: '#fff',
}));


export const HeaderProfileBlock = styled('div')(() => ({
    marginRight: 250,
    display: 'flex',
    alignItems: 'center',
}));

export const HeaderRefreshButton = styled(Button)(() => ({
    '&.MuiButton-root': {
        color: 'red',
        borderColor: 'red',
        marginRight: 10,
        '&:hover': {
            color: 'orange',
            borderColor: 'orange',
        },
    },
}));

export const HeaderProfile = styled(Avatar)(() => ({
    backgroundColor: 'orange',
}));

export const HeaderProfileMenuArrow = styled(KeyboardArrowDownIcon)(({ openMenu }) => ({
    color: '#fff',
    transform: openMenu ? 'rotate(0.5turn)' : '',
}));

export const HeaderProfileMenuButton = styled(Button)(() => ({
    marginRight: 25,

    '&.MuiButton-root': {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
}));

export const HeaderProfileMenu = styled(Menu)(() => ({
    marginTop: 45,
    marginLeft: 7,

    'ul': {
        backgroundColor: '#4d4d4d',
    },
}));

export const HeaderProfileMenuItems = styled(MenuItem)(() => ({
    '&.MuiMenuItem-root': {
        color: '#fff',
        '&:hover': {
            backgroundColor: '#616161',
        },
    },
}));