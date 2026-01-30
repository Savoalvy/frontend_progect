import React, {Suspense} from 'react';
import './styles/index.scss';

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

import {classNames} from "shared/lib";
import {Sidebar} from "widgets/Sidebar/ui";



const App = () => {

   const { theme } = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selectable: true}, [theme])}>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
