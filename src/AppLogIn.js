// src/App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Spinner from 'components/SpinnerComponent';
import PrivateRoute from 'routes/PrivateRoute';

const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayoutComponent')
);
const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const MainTransactionPage = lazy(() => import('./pages/MainTransactionPage'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <main>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route
            path="/:type"
            element={
              <PrivateRoute>
                <MainTransactionPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;

// {/* <Route element={<ProtectedRoute />}>
//             <Route path='/user-profile' element={<ProfileScreen />} />
//           </Route> */}
