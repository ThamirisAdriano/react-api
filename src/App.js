import React, { useEffect, useState } from 'react';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDados(data))
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

