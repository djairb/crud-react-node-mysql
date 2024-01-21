import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState();
  //console.log(values);

  const handleChangeValues = value =>(

    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,

    }))

  );

  const handleClickButton = () => {
    console.log(values)
  };

  return <div className='app-container'>
    <div className='register--container'>

      <h1>Scrim Shop</h1>

      <input
        type='text'
        name='name'
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
