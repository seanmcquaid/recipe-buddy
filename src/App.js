import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './containers/Routes';
import Layout from './Layout';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
