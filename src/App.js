import logo from './logo.svg';
import './App.css';
import FormComponent from './components/formComponent';
import LogInComponent from './components/LogInComponent';

function App() {
  return (
    <div>
      <button id="loginButton" >LOGIN</button>
      <button id="registerButton">REGISTER</button>
      <FormComponent/>
      <LogInComponent/>
    </div>
  );
}

export default App;
