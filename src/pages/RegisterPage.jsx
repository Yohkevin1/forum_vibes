import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asynRegisterUser } from '../states/users/action';
import RegisterInput from '../components/registerInput';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRegister = ({ name, email, password }) => {
        dispatch(asynRegisterUser({ name, email, password }));
        navigate('/login');
    };

    return (
        <div className="container_register_login">
            <aside className="side">
                <h1 className="title">ForumVibes APP</h1>
                <p>
                    Sudah punya akun?<Link to="/login">Login</Link>
                </p>
            </aside>
            <RegisterInput onRegister={onRegister} />
        </div>
    );
}