import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const NewsContainer = ({ news }) => {
    const details = news.details;

    const [isSeeMore, setIsSeeMore] = useState(false);
    let [newsDetailsLength, setNewsDetailsLength] = useState(100);

    console.log(news)
    const handleSeeMoreOrLess = () => {
        setNewsDetailsLength(100);
        setIsSeeMore(!isSeeMore);
        if(isSeeMore){
            setNewsDetailsLength(details.length)
        }
    }

    return (
        <div className='space-y-5 border p-5'>
            <div className='bg-[#F3F3F3] rounded-xl p-4 flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img className='w-16 h-16 rounded-full' src={news?.author?.img} alt="Author image" />
                    <div>
                        <h2 className='font-semibold'>{news?.author?.name}</h2>
                        <h3 className='text-sm text-[#706F6F]'>{news?.author?.published_date}</h3>
                    </div>
                </div>
                <p className='flex text-3xl'><CiBookmark /> <CiShare2 /></p>
            </div>
            <h1 className='text-xl font-bold'>{news?.title}</h1>
            <img src={news?.image_url} alt="" />
            <div>
                <p>{details.slice(0, newsDetailsLength)}
                    <span onClick={handleSeeMoreOrLess} className='hover:cursor-pointer ml-4 hover:text-xl text-[#FF8C47]'>
                        {
                            isSeeMore ? "See Less" : "See More"
                        }
                    </span>
                </p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <p className='ml-5'>{news?.rating?.number}</p>
                </div>
                <div className='flex items-center gap-5'><span><MdOutlineRemoveRedEye /></span>{news?.total_view}</div>
            </div>
        </div>
    );
};

NewsContainer.propTypes = {
    news: PropTypes.object.isRequired
};

export default NewsContainer;