import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";

const News = () => {
    const { id } = useParams();
    const news = useLoaderData();
    console.log(news);
    const aNews = news.find(aNews => aNews._id === id)
    console.log(aNews)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3">
                    <div className=" space-y-5 p-5 border-2 rounded-2xl">
                        <h2 className="text-xl">Dragon News</h2>
                        <img className="w-full rounded-lg" src={aNews?.image_url} alt="" />
                        <h2 className="text-2xl font-bold">{aNews?.title}</h2>
                        <div>
                            <p className="mb-6">{aNews?.details}</p>
                            <Link to="/"><button className="btn btn-secondary">Go Home</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;