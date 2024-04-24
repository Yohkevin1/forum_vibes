import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ThreadAddPage from './pages/ThreadAddPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import Navigation from './components/navigation';
import {asyncPreloadProcess} from './states/isPreload/action';
import {asyncUnsetAuthUser} from './states/authUser/action';

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

    if (authUser === null) {
        return (
            <>
                <Loading />
                <main>
                    <Routes>
                        <Route path="/*" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </main>
            </>
        );
    }

    return (
        <>
            <Loading />
            <div className="app-container">
                <header>
                    <Navigation authUser={authUser} signOut={onSignOut} />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/thread/add" element={<ThreadAddPage />} />
                        <Route path="/thread/:id" element={<ThreadDetailPage />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
