import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';


const AppBar = lazy(() => import('components/AppBar/AppBar'));
const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])


  return (
    <>
      <Suspense fallback={<InfinitySpin width="100" color="#132b13" />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route
              element={
                <PublicRoute
                  redirectPath="/contacts"
                  restricted
                />
              }
            >
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute redirectPath="/" />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>

  );
}

export default App;