import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthContext';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // get form value
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get("photo")
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password);

        // create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Please Register</h2>
            <div className="hero ">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                <div className=" mt-6 flex">
                                    <input className='mr-4' type="checkbox" name="accept" id="" />
                                    <p>Accept Term & Conditions</p>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="ml-7 mb-5 font-semibold text-[#706F6F]"> How did you registered ? <Link to="/login" className=" hover:text-xl text-blue-500 font-bold">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;