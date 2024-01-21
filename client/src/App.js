import React, {useState} from 'react';
import './App.css';
import Axios from "axios";


function App() {
  const [values, setValues] = useState();
  //console.log(values);

  const handleChangeValues = value =>(

    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,

    }))

  );


  /// ctrl + ; comenta e descomenta

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      preco: values.preco,
      categoria: values.categoria,
    }).then((response)=>{
      console.log(response)
    })
  };

  return <div className='app-container'>
    <div className='register--container'>

      <h1>Scrim Shop</h1>

      <input
        type='text'
        name='nome'
        placeholder='Nome'
        className='register--input'
        onChange={handleChangeValues}
      />

      <input
        type='text'
        name='preco'
        placeholder='Preço'
        className='register--input'
        onChange={handleChangeValues}
      />

      <input
        type='text'
        name='categoria'
        placeholder='Categoria'
        className='register--input'
        onChange={handleChangeValues}
      />

      <button

      onClick={() => handleClickButton()}
      
      
      >
        Cadastrar
      </button>
        
        
        

    </div>
  </div>
}

export default App;
