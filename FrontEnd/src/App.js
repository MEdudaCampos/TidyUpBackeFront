import { useState } from "react";
const axios = require('axios');

function App() {

  const [cpf, setCpf] = useState();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log(cpf, password)
    
      try{
        const response = await axios.post('http://localhost:3000', JSON.stringify({cpf, password}), 
        {
          headers: {'Content-Type': 'application/json'}
        }
        
      )
      console.log(response.data);

      
    } catch(error){
      if(!error?.response){
        setError('Erro ao acessar o site')
      } else if (error.response.status === 401) {
        setError('Usuário ou senha inválidos')
      }
    }
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='login-form'/>
          <h2>Login</h2>
          <form className="formulario">
            <input type="text" name="cpf" placeholder="CPF" required onChange={(event) => setCpf(event.target.value)}/>
            <input type="password" name="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit" className="btn-login" onClick={(event) => handleLogin(event)}>Entrar</button>
          </form>
          <p>{error}</p>
      
      </header>
    </div>
  );
}

export default App;
