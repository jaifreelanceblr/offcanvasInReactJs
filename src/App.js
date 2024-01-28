import logo from './logo.svg';
import './App.css';
import Top from './top';
import Login from './login';
import Home from './home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Top />
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home /> } />

       </Routes>
    </div>
  );
}

export default App;
