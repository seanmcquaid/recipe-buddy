import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router';
import { tokenSelector } from '../../store/user/selectors';

const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector(tokenSelector);
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

  return <Route {...props} />;
};

export default ProtectedRoute;
