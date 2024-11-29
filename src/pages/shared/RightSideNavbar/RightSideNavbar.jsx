import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/swimming.png'
import qZone2 from '../../../assets/class.png'
import qZone3 from '../../../assets/playground.png'

const RightSideNavbar = () => {
    return (
        <div>
            <div className="space-y-5">
                <h2 className="text-xl font-semibold">Login With</h2>
                <button className="btn text-center w-full border-2 rounded-xl p-4 hover:bg-white ml-2 border-black hover:text-lg hover:h-16 hover:text-blue-500">
                    <div className="flex gap-2 items-center  ">
                        <FaGoogle></FaGoogle><p>Login With Google</p>
                    </div>
                </button>
                <button className="btn text-center w-full border-2 rounded-xl p-4 border-black ml-2 hover:bg-white hover:text-lg hover:h-16 hover:text-blue-500">
                    <div className="flex gap-2 items-center  ">
                        <FaGithub></FaGithub> <p>Login With Google</p>
                    </div>
                </button>
            </div>
            <div className=" my-8">
                <h2 className="text-xl font-semibold mb-6">Find Us On</h2>
                <div>
                    <a href="">
                        <div className="flex gap-2 items-center font-semibold border-2 border-[#E7E7E7] p-5 rounded-t-2xl">

                            <FaFacebook className="text-[#3B599C]"></FaFacebook> <p>Facebook</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <div className="flex gap-2 items-center font-semibold  border-x-2 border-[#E7E7E7] p-5">

                            <FaTwitter className="text-[#58A7DE]" /> <p>Twitter</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <div className="flex gap-2 items-center font-semibold border-2 border-[#E7E7E7] p-5 rounded-b-2xl">

                            <FaInstagram className="text-[#E9838F]"></FaInstagram> <p>Instagram</p>
                        </div>
                    </a>
                </div>

            </div>
            <div className="flex flex-col gap-5 bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold p-4">Q-Zone</h2>
                <img className="p-4" src={qZone1} alt="" />
                <img className="p-4" src={qZone2} alt="" />
                <img className="p-4" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;