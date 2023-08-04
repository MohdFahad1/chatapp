import Home from './pages/Home/Home';
import Login from './pages/AuthPages/Login';
import Register from './pages/AuthPages/Register';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
    </div>
  );
}

export default App;
