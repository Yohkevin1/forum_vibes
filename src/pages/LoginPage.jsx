import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/loginInput';

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = ({ password }) => {
        dispatch(asyncSetAuthUser({password }));
        navigate('/');
    };

    return (
        <div className="container_register_login">
            <aside className="side">
                <h1 className="title">ForumVibes</h1>
                <p>Sudah punya akun? <Link to="/register">Register</Link></p>
            </aside>
            <LoginInput onLogin={onLogin} />
        </div>
    );
}