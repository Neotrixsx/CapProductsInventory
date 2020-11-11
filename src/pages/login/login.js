import React from 'react'
import LoginNavLinks from '../../component/LoginNavLinks'

export default function login() {
    return (
        <>
            <LoginNavLinks />
            <form className="formClass">
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

               

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
            </form>
        </>
    )
}
