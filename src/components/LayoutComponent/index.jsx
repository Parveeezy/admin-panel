import Header from '../Header';
import Navbar from '../Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const appContainer = {
    backgroundColor: '#151515',
    height: '100vh - 100%',
    display: 'grid',
    gridTemplateColumns: '1fr 10fr',
};

const LayoutComponent = () => {

    return (
        <>
            <Header />
            <div style={appContainer}>
                <Navbar />
                <Outlet />
            </div>
        </>
    );
};

export default LayoutComponent;
