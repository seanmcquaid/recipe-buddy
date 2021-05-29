import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { H1, P } from '../../components';
import { userErrorMessageSelector } from '../../store/user/selectors';
import LoginForm from './LoginForm';

const Login = () => {
  const userErrorMessage = useSelector(userErrorMessageSelector);
  return (
    <PageContainer>
      <Header>
        <H1>Login</H1>
        <P>{userErrorMessage}</P>
      </Header>
      <Main>
        <LoginForm />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Login;
