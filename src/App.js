import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import ForgetPassword from './components/Auth/ForgetPassword';
import ConfirmEmail from './components/Auth/ConfirmEmail';
import NewPassword from './components/Auth/NewPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Questions from './components/Questions/QuestionsPage';
import Setting from './components/Setting/Setting';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/confirm-email" element={<ConfirmEmail /> } />
          <Route path="/new-password" element={<NewPassword /> } />
          <Route path="/sidebar" element={<Sidebar /> } />
          <Route path="/Questions" element={<Questions /> } />
          <Route path="/setting" element={<Setting /> } />
        
        
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
