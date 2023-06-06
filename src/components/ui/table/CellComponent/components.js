import styled from 'styled-components';
import { TableCell } from '@mui/material';

export const CellWrapper = styled(TableCell)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
    padding: '15px 0',
    '&.MuiTableCell-root': {
        color: '#fff',
    },
    fontWeight: 600,
});