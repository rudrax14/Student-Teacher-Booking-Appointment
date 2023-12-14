// pages/LoginPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import LoginCard from '../components/LoginCard';

function LoginPage() {
    const { role } = useParams();

    return (
        <LoginCard role={role} />
    );
}

export default LoginPage;
