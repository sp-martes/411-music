import './App.css';
import { useState } from 'react';
import MusicAppBar from './components/MusicAppBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);  
  
console.log("loggedIn-->",loggedIn)
  return (
    <div className="App">
      <MusicAppBar />  
      {!loggedIn ? <Login loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} /> : <Dashboard />}
    </div>
  );
}

export default App;
