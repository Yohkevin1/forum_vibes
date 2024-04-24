import React from 'react';
import { Link } from 'react-router-dom';
import { RiAddLine } from 'react-icons/ri';

export default function ButtonAdd() {
    return (
        <div className="button__add">
            <Link to="/thread/add">
                <RiAddLine size="2em" color="white" />
            </Link>
        </div>
    );
}