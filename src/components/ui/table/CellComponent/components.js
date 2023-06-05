import styled from 'styled-components';

export const CellWrapper = styled('div')({
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

export const Description = styled('div')({
    color: '#fff',
    fontSize: 18,
})