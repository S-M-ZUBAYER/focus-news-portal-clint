import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Here are the terms and conditions</h2>
            <h4>Go back to <Link to='/register'>Register</Link> </h4>
        </div>
    );
};

export default TermsAndConditions;