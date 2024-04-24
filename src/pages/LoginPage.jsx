import React from 'react';
import { FaForumbee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/loginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
    const dispatch = useDispatch(); // @TODO: get dispatch function from store

    const onLogin = ({ email, password }) => {
        dispatch(asyncSetAuthUser({ email, password }));
    };

    return (
        <section className="login-page">
            <header className="login-page__hero">
                <h1><FaForumbee /></h1>
            </header>
            <article className="login-page__main">
                <h2>Forum Vibes
                </h2>
                <LoginInput login={onLogin} />
                <p> Don&apos;t have an account? {' '} <Link to="/register">Register</Link>
                </p>
            </article>
        </section>
    );
}

export default LoginPage;
