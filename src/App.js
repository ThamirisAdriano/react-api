import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {dados.map(usuario => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


