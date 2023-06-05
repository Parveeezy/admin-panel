import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';

export const StyledMenu = styled(Menu)(() => ({
    marginTop: 45,
    marginLeft: 53,

    'ul': {
        backgroundColor: '#4d4d4d',
    },
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
    backgroundColor: "red",
    '&.MuiMenuItem-root': {
        color: '#fff',
        '&:hover': {
            backgroundColor: '#616161',
        },
    },
}));