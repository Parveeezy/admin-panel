import styled from 'styled-components';
import { Button } from '@mui/material';

export const CustomBtn = styled(Button)(() => ({
    '&.MuiButton-root': {
        color: '#fff',
        borderColor: 'red',
        marginRight: 10,

        '&:hover': {
            color: 'orange',
            borderColor: 'orange',
        },
    },
}));