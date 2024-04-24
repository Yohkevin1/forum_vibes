import React from 'react';
import { FaForumbee } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import RegisterInput from '../components/registerInput';
import {asynRegisterUser} from '../states/users/action';

function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // @TODO: get dispatch function from store

    const onRegister = ({ name, email, password }) => {
        dispatch(asynRegisterUser({ name, email, password }));
        navigate('/');
    };

    return (
        <section className="register-page">
            <header className="register-page__hero">
                <h1><FaForumbee /></h1>
            </header>
            <article className="register-page__main">
                <h2>Buat Akun Kamu</h2>
                <RegisterInput register={onRegister} />

                <p> Already have an account? {' '} <Link to="/">Login</Link>
                </p>
            </article>
        </section>
    );
}

export default RegisterPage;
