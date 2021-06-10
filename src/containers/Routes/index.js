import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import SearchRecipes from '../SearchRecipes';
import Recipe from '../Recipe';
import UserHome from '../UserHome';
import Recipes from '../SearchRecipes/Recipes';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <ProtectedRoute exact path="/userHome" component={UserHome} />
    <ProtectedRoute exact path="/searchRecipes" component={SearchRecipes} />
    <ProtectedRoute exact path="/recipe/:id" component={Recipe} />
    <ProtectedRoute exact path="/recipes" component={Recipes} />
  </Switch>
);

export default Routes;
