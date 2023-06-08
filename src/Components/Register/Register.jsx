import { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from '../../Image/Logo merge.png';
import Logo5 from '../../Image/Line.svg';


const Register = () => {
    const userRef = useRef();


    return (
        <>
            <div style={{ marginRight: 1000 }}>
                <img src={Logo} style={{ width: 90, marginBottom: 70 }}></img>
            </div>
            <section style={{ marginTop: -20 }} className="section-reg">
                <div className="section-fonts" style={{ marginLeft: 20, color: "white" }}>Welcome back</div>
                <form>

                    <input
                        className="input-email"
                        type="text"
                        placeholder="Email"
                        ref={userRef}
                        autoComplete="on"
                    />
                    <input
                        className="input-emails"
                        type="password"
                        placeholder="Password" />

                    <button className="gulam-register">
                        <Link to="/cpanel" style={{textDecoration:"none"}}>Sign in</Link>
                    </button>
                </form>
                <div>
                    <img src={Logo5} className='hr-line-reg'></img>
                </div>
                <p className="link">
                    Create new account?
                    <Link to="/login" style={{ color: "white", fontWeight: 500, marginLeft: 5 }}>Sign Up</Link>
                </p>
            </section>

        </>
    )
}

export default Register;
