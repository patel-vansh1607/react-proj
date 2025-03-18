import './App.css';
import FormComponent from './components/formComponent';
import LogInComponent from './components/LogInComponent';
import { useState } from 'react';
import Navbar from './components/navBar';
import FooterComp from './components/footer';
import HeaderComponent from './components/HeaderComponent';

function App() {
  const [formState, setFormState] = useState("register"); 
   const handleForm = (e) => {
    const btnName = e.target.value
    setFormState(btnName)
    console.log(formState)
  }
  return (
    <div>
      <HeaderComponent />
      <Navbar />
     <div className='tab-container' style={{ marginBottom: '20px'}}>
     <button className="btn"value="register"  onClick={handleForm}>REGISTER</button>
     <button className="btn" onClick={handleForm} >LOGIN</button>
     </div >
      { formState === "register" ? <FormComponent/> : <LogInComponent/> }
      <FooterComp style={{ marginTop: '20px' }}/>          
             
    </div>
  );
}

export default App;
