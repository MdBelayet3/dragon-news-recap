import Header from "./shared/Header/Header";
import LeftSideNavbar from "./shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "./shared/Navbar/Navbar";
import RightSideNavbar from "./shared/RightSideNavbar/RightSideNavbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins">This is home section</h2>
            <LeftSideNavbar></LeftSideNavbar>
            <RightSideNavbar></RightSideNavbar>
        </div>
    );
};

export default Home;