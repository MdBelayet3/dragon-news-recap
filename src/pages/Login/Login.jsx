import { Link, useLocation, useNavigate,} from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location =useLocation();
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        console.log('btn clicked')
        console.log(e.target.email.value)
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        // sign In
        signIn(email,password)
        .then(result =>{
            console.log(result.user);

            // navigate after login
            navigate(location?.state ? location.state : '/')

        })
        .catch(error =>{
            console.error(error);
        })
        e.target.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Please Login</h2>
            <div className="hero ">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="ml-7 mb-5 font-semibold text-[#706F6F]"> Have No Account ? <Link to= "/register" className=" hover:text-xl text-blue-500 font-bold">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;