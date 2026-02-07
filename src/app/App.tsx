import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from '@app/providers/ThemeProvider';
import { classNames } from '@shared/lib/classNames';
import { Sidebar } from '@widgets/Sidebar';
import { AppRouter } from '@app/providers/router';
import { Navbar } from '@widgets/Navbar';

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
