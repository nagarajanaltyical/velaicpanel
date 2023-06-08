import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../Image/Logo merge.png';
import Logo5 from '../../Image/Line.svg';

const Login = () => {
    const userRef = useRef();

    return (
        <>
            <div style={{ marginRight: 1000, marginBottom: 50 }}>
                <img src={Logo} style={{ width: 90, marginBottom: 70 }}></img>
            </div>
            <section className='section'>
                <div className='section-fonts' style={{ marginLeft: 30, color: "white" }}>Create Account</div>
                <form>
                    <label htmlFor="username">
                    </label>
                    <input
                        className='input-email'
                        type="text" id="username" placeholder="Email" ref={userRef} />
                    <label htmlFor="username">
                    </label>
                    <input
                        className='input-email'
                        type="text" id="username" placeholder="Username" />
                    <label>
                    </label>
                    <input
                        className='input-email'
                        type="password" id="password" placeholder="Create Password" />
                    <label>
                    </label>
                    <input
                        className='input-email'
                        type="password" placeholder="Confirm Password" />
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", }}> <button className='gulam'>Sign Up</button>
                    </div>
                    <div>
                        <img src={Logo5} className='hr-line'></img>
                    </div>
                </form>
                <p className='h-h'>
                    Don't you have any account?
                    <Link to="/" style={{ color: "white", fontWeight: 500, marginLeft: 5 }}>Sign in</Link>
                </p>
            </section>
        </>
    )
}

export default Login;