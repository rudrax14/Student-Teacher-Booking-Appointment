import React from 'react'

function LoginForm() {
    return (
        <>
        {/* <Navbar /> */}
      <section className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        {/* Register Container */}
        <div className="container bg-white rounded-2 shadow-lg p-5 w-50">
          {/* Form */}
          <div className="row">
            <div className="col-md-6">
              <h2 className="font-bold text-2xl">Student Login</h2>
              <p className="text-sm mt-4">
                If you are already a member, easy login
              </p>
              {/* form start */}
              <form
                className="d-flex flex-column gap-3"
                onSubmit={submitHandler}
              >
                <input
                  className="form-control mt-3"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Email"
                />
                <div className="form-group">
                  <input
                    className="form-control mt-3"
                    type="password"
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex mt-3 ">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                  <Link to="/student/dashboard" className="me-3">
                    {/* <button className="btn btn-primary" onClick={() => Alert('Logged in', 'success')} type="submit" value="Submit">Login</button> */}
                  </Link>
                  <Link to="/student/signup">
                    <button className="btn btn-primary">Register</button>
                  </Link>
                </div>
              </form>
            </div>
            {/* Image */}
            <div className="col-md-6 d-md-block d-none d-flex justify-content-center">
              <img
                className="img-fluid"
                src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
                alt="img error"
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default LoginForm