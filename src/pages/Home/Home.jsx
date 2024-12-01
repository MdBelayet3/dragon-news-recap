import Header from "../shared/Header/Header";
import BriefNews from "./BriefNews";
import LeftSideNavbar from "../shared/LeftSideNavbar/LeftSideNavbar"
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar"
import Navbar from "../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import NewsContainer from "./NewsContainer";


const Home = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() =>{
        fetch("news.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllNews(data);
        })
    },[])

    return (
        <div>
            <Header></Header>
            <BriefNews></BriefNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="">
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold">Dragon News Home : {allNews.length}</h2>
                    <div>
                        {allNews.slice(0,4).map((news,idx) => <NewsContainer key={idx} news={news}></NewsContainer>)}
                    </div>
                </div>
                <div className="">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;