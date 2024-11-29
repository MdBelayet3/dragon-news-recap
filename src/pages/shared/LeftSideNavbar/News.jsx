import PropTypes from 'prop-types';
import { LuCalendarDays } from "react-icons/lu";

const News = ({news}) => {

    return (
        <div className='space-y-5 shadow-md border p-4 rounded-2xl'>
            <img className='rounded-2xl' src={news?.image_url} alt="" />
            <h2 className='text-xl font-semibold'>{news?.title}</h2>
            <div className='flex items-center gap-4'>
                <h3 className='font-medium mr-4'>Political News</h3>
                <span><LuCalendarDays /></span>
                <p className=''>{news?.author?.published_date}</p>
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object.isRequired,
};

export default News;