import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ModeratorsComponent from './components/Moderators';

const appContainer = {
    backgroundColor: '#151515',
    height: '100vh - 100%',
    display: 'grid',
    gridTemplateColumns: '1fr 10fr',
};

function App() {
    return (
        <>
            <Header />
            <div style={appContainer}>
                <Navbar />
                <ModeratorsComponent />
            </div>
        </>
    );
}

export default App;
