import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ModeratorsPage = () => {
    return (
        <Routes>
            <Route path={'/moderators'} element={<ModeratorsPage />} />
        </Routes>
    );
};

export default ModeratorsPage;