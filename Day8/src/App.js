
import './App.css';
import { useEffect} from 'react';
import { Routes, useLocation, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logobar from './Components/LogoBar/Logobar';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Mainpage/MainPage';
import Dashboard from './Components/DashBoard/DashBoard';
import MyAccount from './Components/DashBoard/Pages/MyAccount/MyAccount';
import Projects from './Components/DashBoard/Pages/Projects/Projects';
import Community from './Components/DashBoard/Pages/Community/Community';
import Saved from './Components/DashBoard/Pages/Saved/Saved';
import Volunterr from './Components/Volunteer/Volunterr';
import Reduxlist from './Components/Redux/Reduxlist';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';
import Privacypolicy from './Components/Privacypolicy/Privacypolicy';
import Terms from './Components/Terms/Terms';
import Feedback from './Components/Feedback/Feedback'


const ScrolltoTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])
  return null;
}
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <ScrolltoTop/>
        <Logobar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/list' element={<Reduxlist/>}/>
          <Route path='/volunteer' element={<Volunterr/>}/>
          <Route path='/privacypolicy' element={<Privacypolicy/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='myaccount' element={<MyAccount/>}/>
              <Route path='projects' element={<Projects/>}/>
              <Route path='saved' element={<Saved/>}/>
              
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  
  );
}

export default App;
