// components/LoginForm.js
import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ role }) {
  return (
    <form className="d-flex flex-column gap-3">
      <input className="form-control mt-3" type="email" name="email" placeholder="Email" />
      <div className="form-group">
        <input className="form-control mt-3" type="password" name="password" placeholder="Password" />
      </div>
      <div className="d-flex mt-3">
        <Link to={`/${role}/dashbord`}>
          <button type="submit" className="btn btn-primary">Login</button>
        </Link>
        <Link to={`/${role}/signup`}>
          <button className="btn btn-primary">Register</button>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
