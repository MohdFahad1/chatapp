import Home from './pages/Home/Home';
import Login from './pages/AuthPages/Login';
import Register from './pages/AuthPages/Register';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children;
  }
  console.log(currentUser);
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
