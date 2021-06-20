import react, { useContext, useState } from 'react'
import { Container, ContainerForm, ContainerButton, CriarButton, Inputs, Label, RedeSocialButton, ContainerColor } from './styled';
import StoreContext from '../../componentes/Store/Context';
import { useHistory } from 'react-router-dom';


function initialState() {
  return { user: '', password: ''};
}

  function login ({ user, password }) {
    if( user === 'admin' && password === 'admin') {
      return { token: '1234'};
    }
    return { error: 'Usuário ou Senha inválido'};
  }

    const UserLogin = () => {
      const [values, setValues] = useState(initialState);
      const [error, setError] = useState(null);
      const { setToken } = useContext(StoreContext);
      const history = useHistory();

      function onChange (event) {
          const { value, name} = event.target;

          setValues({
            ...values,
            [name]: value
          });
      }

    function onSubmit (event) {
      event.preventDefault();

      const { token, error } = login(values);
      if (token) {

        setToken(token);
        return history.push('/');
      }

      setError(token)
      setValues(initialState);
    }

     return(
      <Container>
        <ContainerColor>
          <div> rosa</div>
          <div>verde</div>
          <div>laranja</div>
          <div>azul</div>
        </ContainerColor>
        <ContainerForm>
          <div>
            <h2>Cadastra-se <br/> ou faça login com sua conta</h2>
            <ContainerButton>
              <RedeSocialButton background-color="red">Facebook</RedeSocialButton>
              <RedeSocialButton>Google</RedeSocialButton>
            </ContainerButton>
          </div>
          <form onSubmit={onSubmit}>
            <Label htmlFor="email">E-mail</Label>
              <Inputs
                id="user"
                key='user'
                type="text" 
                name="user" 
                onChange={onChange}
                value={values.user}
                />
            <Label>Senha</Label>
              <Inputs
                id="password"
                key='password'
                type="password"
                name="password" 
                onChange={onChange}
                value={values.password}
              /> 
              {error && (
            <div className="user-login__error">{error}</div>
            )}<CriarButton>Criar Cadastro</CriarButton>
          </form>
        </ContainerForm>
        
        <div>oi</div>
      </Container>
    );
};

export default UserLogin