import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ClassesPage, ModeratorsPage } from './pages';

import { LayoutComponent } from './components';

const App = () => (
    <Routes>
        <Route path="/" element={<LayoutComponent />}>
            <Route path="/moderators" element={<ModeratorsPage />} />
            <Route path="/classes" element={<ClassesPage />} />
        </Route>
    </Routes>
);

export default App;
