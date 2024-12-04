import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate, useLocation, } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivetRouter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRouter;