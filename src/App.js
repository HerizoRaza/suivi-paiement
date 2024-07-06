import React, { useEffect, useState } from 'react';
import axios from './components/config';
import LoginForm from './components/login/login';


const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post('http://localhost:3030/user/add') // Remplacez '/endpoint' par votre chemin API
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur !', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  function LoadingIndicator() {
    return <div>Chargement...</div>;
  }
  
  function DataDisplay({ data }) {
    return <div>Data: {JSON.stringify(data)}</div>;
  }

  return (
    <div className="App">
      <LoginForm />
    </div>
  );

};
export default App;
