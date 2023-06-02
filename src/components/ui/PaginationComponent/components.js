import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationComponent = styled(Pagination)(() => ({
    '& .MuiPaginationItem-root': {
        color: '#fff',
        border: 'none',
        margin: 0,

        '&.Mui-selected': {
            color: '#fff',
            backgroundColor: 'red',
            '&:hover' : {
                backgroundColor: 'red',
            }
        },
    },

    'li': {
        marginRight: 10
    },

    'svg:first-child': {
        border: '2px solid #fff',
        borderRadius: 3,
    },
}));