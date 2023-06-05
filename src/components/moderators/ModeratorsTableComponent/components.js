import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';

export const Wrapper = styled('div')({
    maxWidth: 1220,
    margin: 25,
    backgroundColor: '#3c3c3c',
    borderRadius: 10,
    paddingBottom: 30,
});

export const DescriptionBlock = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '3px solid #898989',
    maxWidth: 750,
    paddingBottom: 15,
    paddingTop: 20,
    paddingLeft: 75,
    marginLeft: 20,
});

export const Description = styled('span')({
    color: '#fff',
    fontSize: 18,
});

export const ItemsWrapper = styled('div')({
    width: '100%',
    marginLeft: 20,
});

export const ItemBlock = styled('div')({
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

export const ListNumber = styled('span')({
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
    color: '#fff',
});