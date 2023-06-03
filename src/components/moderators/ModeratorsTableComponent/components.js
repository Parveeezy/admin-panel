import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';

export const Wrapper = styled('div')({
    maxWidth: 1150,
    margin: 25,
    backgroundColor: '#3c3c3c',
    height: 200,
    borderRadius: 10,
});

export const DescriptionBlock = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '3px solid #898989',
    width: 650,
    paddingBottom: 15,
    paddingTop: 20,
    paddingLeft: 30,
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

});

export const ListNumber = styled('span')({
    color: '#fff',
});

export const Person = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

export const PersonImg = styled(Avatar)``;

export const Name = styled('span')({
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
});

export const Status = styled('span')({
    color: '#fff',
});

export const SelectStatus = styled(Button)({
    color: '#fff',
});