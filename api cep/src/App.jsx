import { useState } from 'react'
import './App.css'

function App() {

  const [cep, setcep] = useState('');
  const [endereco, setendereco] = useState(null);

  const handlebuscacep = async (event) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado.');
        }
       setendereco(await response.json());
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='container'>
        <h1>busca de endereço</h1>
        <input type="number" placeholder='digite o seu cep'
          value={cep}
          onChange={(e) => setcep(e.target.value)}

        />
        <button onClick={handlebuscacep}>
          buscar
        </button>
        <div className='endereco'>
            {endereco ?(<>
            <p>CEP: {JSON.stringify(endereco.cep)}</p>
            <p>Logradouro: {JSON.stringify(endereco.logradouro)}</p>
            <p>Complemento: {JSON.stringify(endereco.complemento)}</p>
            <p>Bairro: {JSON.stringify(endereco.bairro)}</p>
            <p>Localidade:{JSON.stringify(endereco.localidade)}</p>
            <p>UF: {JSON.stringify(endereco.uf)}</p>
            <p>IBGE: {JSON.stringify(endereco.ibge)}</p>
            <p>GIA: {JSON.stringify(endereco.gia)}</p>
            <p>DDD: {JSON.stringify(endereco.ddd)}</p>
            <p>SIAFI: {JSON.stringify(endereco.siafi)}</p>
            </>): null}
        </div>
      </div>
    </>
  )
}

export default App
