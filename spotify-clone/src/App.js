import './App.css';
import Login from './components/login/Login';
import { useEffect, useState } from 'react'
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      setToken(_token)
    }
  }, []);

  return (
    <div className="App">
      {token ? (
        <h2>I am Logged In</h2>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;