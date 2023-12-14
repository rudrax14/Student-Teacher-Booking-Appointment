// pages/Homepage.js
import React from 'react';
import Card from '../components/Card';
import studentImg from '../assets/students.jpg';
import teacherImg from '../assets/teachers.jpg';
import adminImg from '../assets/admin.jpg';

function Homepage() {
    return (
        <div className="container" style={{ marginTop: "17%" }}>
            <div className="row">
                <div className="col-sm-10 col-md-6 col-lg-4 my-3">
                    <Card name="Student" img={studentImg} role="student" />
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4 my-3">
                    <Card name="Teacher" img={teacherImg} role="teacher" />
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4 my-3">
                    <Card name="Admin" img={adminImg} role="admin" />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
