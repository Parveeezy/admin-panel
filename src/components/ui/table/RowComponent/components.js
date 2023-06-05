import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';

export const RowWrapper = styled('div')({
    width: '96%',
    marginLeft: 20,
});

export const Block = styled('div')({
    borderBottom: '3px solid #898989',
    width: '90%',
    paddingTop: 25,
    paddingBottom: 15,
});

export const ItemWrapper = styled('div')({
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
});

export const RowNumber = styled('span')({
    color: '#fff',
    textAlign: 'start',
});

export const Person = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 350,
});

export const PersonImg = styled(Avatar)({
    '&.MuiAvatar-root': {
        backgroundColor: 'orange',
        width: 60,
        height: 40,
        borderRadius: 20,
    },
});

export const Name = styled('span')({
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
});

export const StatusBlock = styled('div')({
    width: 130,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
});

export const StatusColor = styled('span')({
    width: 5,
    height: 5,
    backgroundColor: 'red',
    borderRadius: '50%',
    marginRight: 5,
});

export const Status = styled('span')({
    color: '#fff',
});

export const SelectStatus = styled(Button)({
    '&.MuiButton-root': {
        color: '#fff',
        border: '2px solid red',

        '&:hover': {
            color: 'orange',
            border: '2px solid orange',
        }
    }
});

export const SelectStatusWrapper = styled('div')({
    maxWidth: 350,
    maxHeight: 350,
    borderRadius: 10
})

