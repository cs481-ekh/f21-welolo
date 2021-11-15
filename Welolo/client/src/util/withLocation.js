import { useParams } from 'react-router-dom';

export const withLocation = WrappedComponent => props => {
    const location = useParams();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={location}
      />
    );
  };