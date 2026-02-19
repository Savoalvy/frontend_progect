import React, { Suspense, useEffect } from 'react';
import { useTheme } from '@app/providers/ThemeProvider';
import { classNames } from '@shared/lib/classNames';
import { Sidebar } from '@widgets/Sidebar';
import { AppRouter } from '@app/providers/router';
import { Navbar } from '@widgets/Navbar';
import { useDispatch } from 'react-redux';
import { userAction } from '@entities/User';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Suspense fallback={<div>Загрузка...</div>}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
