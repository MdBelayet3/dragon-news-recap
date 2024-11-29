import Header from "../shared/Header/Header";
import BriefNews from "./BriefNews";
import LeftSideNavbar from "../shared/LeftSideNavbar/LeftSideNavbar"
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar"
import Navbar from "../shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BriefNews></BriefNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="">
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="col-span-2 border">
                    <h2 className="text-4xl">News Coming soon...</h2>
                </div>
                <div className="">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;