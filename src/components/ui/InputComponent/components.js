import styled from 'styled-components';
import { Autocomplete } from '@mui/material';

export const CustomInput = styled(Autocomplete)(() => ({
    '& .MuiInputBase-root' : {
        color: '#fff',
        borderColor: 'red',
        
        '& .MuiInputBase-input': {
            borderColor: 'red'
        }
    },

}))