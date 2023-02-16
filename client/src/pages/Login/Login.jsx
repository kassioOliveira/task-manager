import React,{useState, useContext, useEffect} from 'react'

import { ButtomForm, ContainerError, ContainerForm, Form, FormTitle, InputForm, Label, LinkForm } from './LoginStyle'
import { Context } from '../../Hooks/Contexts';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({});
  
    const {signed,signIn} = useContext(Context);

    useEffect(()=>{

      if(signed){
        navigate('/');
      }

    }, [signed,navigate]);

    const handleSignIn = async (e) => {

        e.preventDefault();

        const isValidEmail = validateEmail(email);

        const isValidInput = validInput();

        if(!isValidInput){
          return;
        }

        if(!isValidEmail){
          setErrorMessage({ email: ' Adicione um email inválido!' });
          return;
        }

          try {
           await signIn(email,password);
           setEmail('');
          setPassword('');
          } catch (error) {
            alert(error.message);
            setErrorMessage({});
            return;
          }

        
      }

      const validInput = () =>{
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

        if(email.match(mailformat)){
          return true;
        }

        return false;
      }

      if(!signed){
        return (
            <ContainerForm>
              <FormTitle>
                Login
              </FormTitle>
              <Form onSubmit={handleSignIn}>
               
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
                  Entrar
                </ButtomForm>
        
              </Form>
              <LinkForm to='/signup'>
                Criar conta
              </LinkForm>
            </ContainerForm>
          )
      }
}
