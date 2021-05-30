import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
