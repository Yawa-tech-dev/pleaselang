import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data') // Adjust based on your backend endpoint
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;