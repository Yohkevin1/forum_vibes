import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function RegisterInput({ onRegister }) {
    const [name, handleNameChange] = useInput('');
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    return (
        <div className="content-register">
            <h2 style={{ fontSize: '30px' }}>Halaman Register</h2>
            <p>Daftarkan akunmu sekarang</p>
            <form>
                <input className="input" type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                <input className="input" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input className="input" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button className="button_register" onClick={() => onRegister({ name, email, password })}>Register</button>
            </form>
        </div>
    );
}

RegisterInput.propTypes = {
    onRegister: PropTypes.func.isRequired,
};
