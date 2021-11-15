import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export const withRouter = WrappedComponent => props => {
    const params = useParams();
    const location = useLocation();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={params}
        location={location}
        state={location.state}
      />
    );
  };