import { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button, TextInput } from '../../components';
import { registerAction } from '../../store/user/actions';

const RegisterForm = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const passwordsMatch = useMemo(
    () => state.password !== state.confirmPassword,
    [state.password, state.confirmPassword],
  );
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
    dispatch(registerAction(state.username, state.password)).then(() => {
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
        type="text"
      />
      {passwordsMatch ? (
        <PasswordErrorMessage>
          Make sure your password and confirm password match!
        </PasswordErrorMessage>
      ) : null}
      <TextInput
        onChange={onChange}
        value={state.password}
        name="password"
        label="Password"
        type="password"
      />
      <TextInput
        onChange={onChange}
        value={state.confirmPassword}
        name="confirmPassword"
        label="Confirm Password"
        type="confirmPassword"
      />
      <Button type="submit" label="Submit" disabled={passwordsMatch} />
    </Form>
  );
};

const Form = styled.form``;

const PasswordErrorMessage = styled.span``;

export default RegisterForm;
