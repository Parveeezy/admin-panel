import styled from 'styled-components';
import { Autocomplete, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

export const CustomInput = styled((props) => (
    <Autocomplete {...props} popupIcon={<Search />}/>
))(() => ({
    '&. MuiAutocomplete-root ': {
        width: '100%',
    },
    '& .MuiInputBase-root': {
        color: '#fff',
        borderColor: 'red',

        '& .MuiInputBase-input': {
            borderColor: 'red',
        },
    },
    '&.MuiFormLabel-root': {
        borderColor: 'red',
    },
    '& .MuiAutocomplete-popupIndicatorOpen': {
        transform: 'none !important',
    },
}));

export const CustomTextField = styled(TextField)(() => ({
    backgroundColor: 'transparent',
    '& label.Mui-focused': {
        color: '#c3c3c3',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#868686',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#868686',
        },
        '&:hover fieldset': {
            borderColor: '#868686',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#c3c3c3',
        },
        "& svg": {
            color: '#868686'
        },
    },
    label : {
        color: '#868686'
    }
}));