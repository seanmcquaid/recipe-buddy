import { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../components';

const LoginForm = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextInput />
      <TextInput />
    </Form>
  );
};

const Form = styled.form``;

export default LoginForm;
