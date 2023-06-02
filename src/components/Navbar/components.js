import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled('nav')(() => ({
    display: 'block',
    width: '20vw',
    height: '100vh',
    backgroundColor: '#3c3c3c',
    color: '#fff',
}))

export const NavbarItems = styled('ul')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
}))

export const NavbarItem= styled('li')(() => ({
    color: '#fff',
    fontSize: '1vw',
    fontWeight: 300,
    width: '100%',
    height: '100%',
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

    '&:first-child': {
        marginTop: 0,
    },
}))


export const NavbarItemLink = styled(NavLink)(() => ({
    color: '#fff',
    textDecoration: 'none',
    padding: 10,
    marginTop: 0,
    width: '100%',
    height: '100%',
    borderLeft: '8px solid transparent',


    '&:hover': {
        backgroundColor: '#727272',
        borderLeft: '8px solid #fff',
        color: 'gold'
    },

}))