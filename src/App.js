import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

const appContainer = {
    backgroundColor: '#151515',
    height: '100vh - 100%',
}

function App() {
    return (
        <div style={appContainer}>
            <Header/>
            <Navbar/>
        </div>
    );
}

export default App;
