import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function LoginInput({ onLogin }) {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    return (
        <div className="content-login">
            <h2 style={{ fontSize: '30px' }}>Halaman Login</h2>
            <form>
                <input className="input" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input className="input" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button className="button_login" onClick={() => onLogin({ email, password })}>Login</button>
            </form>
        </div>
    );
}

LoginInput.propTypes = {
    onLogin: PropTypes.func.isRequired,
};
