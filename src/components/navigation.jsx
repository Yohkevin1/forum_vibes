import React from 'react';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';

export default function Navigation({ signOut }) {
    return (
        <div className="navigation">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className="title">ForumVibes</h1>
            </Link>
            <button type="button" onClick={signOut}>Sign out</button>
        </div>
    );
}

Navigation.propTypes = {
    signOut: PropsTypes.func.isRequired,
};