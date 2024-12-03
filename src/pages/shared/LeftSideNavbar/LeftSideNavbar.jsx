import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import News from "./News";

const LeftSideNavbar = () => {
    const [categories, setCategory] = useState([]);
    const [allNews, setAllNews] = useState([]);

    // useEffect hook for load categories data
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCategory(data);
        })
    },[])

    // useEffect hook for load news data
    useEffect(() =>{
        fetch("news.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllNews(data)
        })
    },[])

    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold">All Category</h1>
                <h2 className="text-xl w-full bg-[#E7E7E7] text-center p-5 rounded-2xl my-7 font-semibold">National News</h2>
                <div className="space-y-7">
                    {categories.map(category => <Link to={`/category/${category.name}`} className="block ml-14 text-[#9F9F9F]" key={category.id}>{category.name}</Link>)}
                </div>
            </div>
            <div className="space-y-5 my-8">
                {allNews.slice(0,6).map((news,idx) => <News key={idx} news={news}></News>)}
            </div>
        </div>
    );
};

export default LeftSideNavbar;