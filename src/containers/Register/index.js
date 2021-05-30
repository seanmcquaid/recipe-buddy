import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { H1, P } from '../../components';
import { errorMessageSelector } from '../../store/error/selectors';
import RegisterForm from './RegisterForm';

const Register = () => {
  const errorMessage = useSelector(errorMessageSelector);

  return (
    <PageContainer>
      <Header>
        <H1>Register</H1>
      </Header>
      <Main>
        <P data-testid="errorMessage">{errorMessage}</P>
        <RegisterForm />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Register;
