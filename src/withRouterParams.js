import { useParams } from 'react-router-dom';

const withRouterParams = (Component) => {
  return (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
};

export default withRouterParams;