import React from 'react'
import LoginCard from '../components/LoginCard'
import studentImg from '../assets/students.jpg';
import teacherImg from '../assets/teachers.jpg';
import adminImg from '../assets/admin.jpg';
function Homepage() {
    return (
        <>


            <div className="container"
                style={{ marginTop: "17%" }}>
                <div className="row">
                    <div className="col-sm-10 col-md-6 col-lg-4 my-3">
                        <LoginCard name="Student" img={studentImg} />

                    </div>

                    <div className="col-sm-10 col-md-6 col-lg-4 my-3">
                        <LoginCard name="Teacher" img={teacherImg} />
                    </div>

                    <div className="col-sm-10 col-md-6 col-lg-4 my-3">
                        <LoginCard name="Admin" img={adminImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage