import React from 'react';

import { ModeratorsHeaderComponent } from '../../components';
import { ModeratorsTableComponent } from '../../components';

const ModeratorsPage = () => {
    return (
        <div>
            <ModeratorsHeaderComponent />
            <ModeratorsTableComponent />
        </div>
    );
};

export default ModeratorsPage;