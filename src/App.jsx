import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/navigation';
import HomePage from './pages/HomePage';
import ThreadAddPage from './pages/ThreadAddPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import Loading from './components/Loading';

function App() {
    const {
        authUser = null,
        isPreload = false,
    } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    const onSignOut = () => {
        dispatch(asyncUnsetAuthUser());
    };

    if (isPreload) {
        return null;
    }

    if (authUser == null) {
        return (
            <main className="background">
                <Loading />
                <Routes>
                    <Route path="/*" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
        );
    }

    return (
        <div>
            <Loading />
            <header>
                <Navigation signOut={onSignOut} />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/thread/add" element={<ThreadAddPage />} />
                    <Route path="/thread/:id" element={<ThreadDetailPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
