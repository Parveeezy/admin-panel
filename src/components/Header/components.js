import styled from 'styled-components';
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

export const HeaderProfile = styled(Avatar)(() => ({

}));

export const HeaderProfileMenuArrow = styled(props => (
    <span {...props}>
        <KeyboardArrowDownIcon />
    </span>
))(({ $openMenu }) => ({
    display: 'flex',
    color: '#fff',
    transition: 'all .3s ease',
    transform: $openMenu && 'rotate(0.5turn)',
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
    marginLeft: 53,

    'ul': {
        backgroundColor: '#4d4d4d',
    },
}));

export const HeaderProfileMenuItems = styled(MenuItem)(() => ({
    backgroundColor: "red",
    '&.MuiMenuItem-root': {
        color: '#fff',
        '&:hover': {
            backgroundColor: '#616161',
        },
    },
}));