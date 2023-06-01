import styled from 'styled-components';
import { Avatar, Button, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const HeaderContainer = styled('header')(() => ({
    height: 70,
    backgroundColor: '#4a4a4a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

export const HeaderLogoTitleBlock = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 50,
}));

export const HeaderLogo = styled('div')(() => ({
    width: 35,
    height: 35,
    backgroundColor: 'red',
    marginRight: 5,
}));

export const HeaderTitle = styled('p')(() => ({
    fontSize: 24,
    color: '#fff',
}));


export const HeaderProfileBlock = styled('div')(() => ({
    marginRight: 250,
    display: 'flex',
    alignItems: 'center'
}));

export const HeaderRefreshButton = styled(Button)(() => ({

    '&.MuiButton-root': {
        color: 'red',
        borderColor: 'red',
        marginRight: 10,
        '&:hover': {
            color: 'orange',
            borderColor: 'orange',
        }
    }
}));

export const HeaderProfile = styled(Avatar)(() => ({
    backgroundColor: 'orange',
}));

export const HeaderProfileMenuArrow = styled(KeyboardArrowDownIcon)(() => ({
    color: '#fff'
}));

export const HeaderProfileMenuButton = styled(Button)(() => ({

}));

export const HeaderProfileMenu = styled(Paper)(() => ({

}));