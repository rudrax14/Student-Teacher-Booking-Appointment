// components/LoginCard.js
import React from 'react';
import LoginForm from './LoginForm';
import studentImage from '../assets/studentLogin.jpg';
import teacherImage from '../assets/teacherLogin.jpg';
function LoginCard({ role }) {
    const getRoleImageSrc = () => {
        switch (role) {
            case 'student':
                return studentImage;
            case 'teacher':
                return teacherImage;
            default:
                return studentImage;
        }
    };
    return (
        <section className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container bg-white rounded-2 shadow-lg p-5 w-50">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="font-bold text-2xl">{`${role.charAt(0).toUpperCase() + role.slice(1)} Login`}</h2>
                        <p className="text-sm mt-4">
                            If you are already a member, easy login
                        </p>
                        <LoginForm role={role} />
                    </div>
                    <div className="col-md-6 d-md-block d-none d-flex justify-content-center">
                        <img
                            className="img-fluid"
                            src={getRoleImageSrc()}
                            alt={`${role} img`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginCard;
