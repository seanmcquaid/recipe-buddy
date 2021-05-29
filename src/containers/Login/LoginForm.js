import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button, TextInput } from '../../components';
import { loginAction } from '../../store/user/actions';

const LoginForm = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAction(state.username, state.password)).then(() => {
      history.push('/userHome');
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        value={state.username}
        name="username"
        label="Username"
      />
      <TextInput
        onChange={onChange}
        value={state.password}
        name="password"
        label="Password"
      />
      <Button type="submit" label="Submit" />
    </Form>
  );
};

const Form = styled.form``;

export default LoginForm;
