import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@widgets/PageLoader';
import { routeConfig } from '@shared/config';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <div className='page-wrapper'>
      <Routes>
        {Object.values(routeConfig).map(
          ({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ),
        )}
      </Routes>
    </div>
  </Suspense>
);

export default AppRouter;
