import React from 'react'
import { useState,useContext,useEffect } from 'react';
import { ButtomForm, ContainerError, ContainerForm, Form, FormTitle, InputForm, Label, LinkForm } from './SignUpStyled'
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export default function SignUp() {

  const {signed} = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(()=>{

    if(signed){
      navigate('/');
    }

  }, [signed,navigate]);


  const handleSubmit = async (e) => {

    e.preventDefault();

    const isValidEmail = validateEmail(email);

    const isValidInput = validInput();

    if (!isValidInput) {
      return;
    }

    if (!isValidEmail) {
      setErrorMessage({ email: ' Adicione um email inválido!' });
      return;
    }

    try {
     await api.post("/users",{name,email,password});
      alert('Usuário criado com sucesso!');
      setName('');
      setEmail('');
      setPassword('');
      setErrorMessage({});
      navigate('/login');

    } catch (error) {
      setErrorMessage({});
      alert(error.response.data.error);
      return;

    }
   
  }

  const validInput = () => {
    if (!email) {
      setErrorMessage({ email: 'Preencha seu email!' })
      return;
    }

    if (!password) {
      setErrorMessage({ password: 'Coloque uma senha!' })
      return;
    }

    if (password.length < 6) {
      setErrorMessage({ password: 'Sua senha precisa no minímo 6 caracteres!' })
      return;
    }

    return true;
  }

  const validateEmail = (email) => {
    const mailformat = /\S+@\S+\.\S+/

    if (email.match(mailformat)) {
      return true;
    }

    return false;
  }

  if(!signed){
    return (
      <ContainerForm>
        <FormTitle>
          Cadastro
        </FormTitle>
        <Form onSubmit={handleSubmit}>
          <Label>
            Nome:
            <InputForm onChange={(e) => setName(e.target.value)} value={name} type='text' name='name' h={'35px'} />
  
          </Label>
          {errorMessage?.name && (<ContainerError><p>{errorMessage?.name}</p></ContainerError>)}
          <Label>
            Email:
            <InputForm onChange={(e) => setEmail(e.target.value)} value={email} type='text' name='email' h={'35px'} />
          </Label>
          {errorMessage?.email && (<ContainerError><p>{errorMessage?.email}</p></ContainerError>)}
          <Label>
            Senha:
            <InputForm onChange={(e) => setPassword(e.target.value)} value={password} type='text' name='password' h={'35px'} />
          </Label>
          {errorMessage?.password && (<ContainerError><p>{errorMessage?.password}</p></ContainerError>)}
          <ButtomForm type='submit' value='Enviar'>
            Criar
          </ButtomForm>
  
        </Form>
        <LinkForm to='/login'>
          Já tem uma conta?
        </LinkForm>
      </ContainerForm>
    )
  }
}
