import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';

const Success = () => {
    const {user} = useAuth();
    return (
        <div>
            <h3 className="mb-5">Dear {user?.displayName},your order has been placed successfully</h3>
            <br /><br /><br /><br /><br />
            <Footer className="mt-5"></Footer>
        </div>
    );
};

export default Success;