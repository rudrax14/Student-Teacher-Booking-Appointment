import React from 'react'
import { Link } from 'react-router-dom'

function LoginCard({ name, img }) {
    return (
        <>
            <div className="card">
                <img
                    src={img}
                    className="card-img-top"
                    alt={name}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <Link href="/" className="btn btn-primary">
                        Let's Go
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LoginCard