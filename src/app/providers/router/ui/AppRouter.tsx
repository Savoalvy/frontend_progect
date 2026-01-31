import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config';

const AppRouter = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <div className="page-wrapper">
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </div>
    </Suspense>
);

export default AppRouter;
