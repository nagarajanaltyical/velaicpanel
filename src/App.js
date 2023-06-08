import './App.css';
import Register from './Components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Cpanel from './Components/Cpanel/Cpanel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Register />} />
          </Route>
          <Route path="login">
            <Route index element={<Login />} />
          </Route>
          <Route path="cpanel">
            <Route index element={<Cpanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
