import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-12'>
            <div className='flex justify-center  mb-5'>
                <img src={logo} alt="" />
            </div>
            <div className='text-center'>
                <p>Journalism Without Fear or Favour</p>
                <p className='text-xl mt-3 mb-7'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;