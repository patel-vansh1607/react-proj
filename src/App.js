import logo from './logo.svg';
import './App.css';
import FormComponent from './components/formComponent';
import LogInComponent from './components/LogInComponent';

function App() {
  const handleForm = (e) => {}
  return (
    <div>
      <button id="loginButton" onClick={handleForm} >LOGIN</button>
      <button id="registerButton" onClick={handleForm}>REGISTER</button>
      <FormComponent/>
      <LogInComponent/>
    </div>
  );
}

export default App;
