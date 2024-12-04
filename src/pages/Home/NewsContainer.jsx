import PropTypes from 'prop-types';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const NewsContainer = ({ news }) => {
    const details = news.details;


    return (
        <div className='space-y-5 border-2 p-5 rounded-xl shadow-xl'>
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
                {
                    details.length >= 200 
                    ? <p>{details.slice(0,200)} <Link to={`/news/${news._id}`} className="text-blue-600 text-xl font-bold">Reed More...</Link></p>
                    : <p>{details}</p>
                }
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