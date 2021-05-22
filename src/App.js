import { BrowserRouter } from 'react-router-dom';
import Routes from './containers/Routes';
import Layout from './Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);

export default App;
