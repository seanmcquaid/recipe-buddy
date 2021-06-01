import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import UserHome from '../UserHome';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/userHome" component={UserHome} />
    <Route exact path="/searchRecipes" />
  </Switch>
);

export default Routes;
