
import './App.css';
import Login from './components/LoginPage2.1/Login';
import NavigationBar from './components/LoginPage2.1/NavigationBar';
// import Login from './components/LoginPage2.1/Login'
import Home from './components/LoginPage2.1/Home'
import { useContext } from 'react';
import AuthContext from './components/LoginPage2.1/Context';

function App() {

  const {isLoggedIn} = useContext(AuthContext);

  return (
    <div className="App">
    <NavigationBar/>
     {isLoggedIn?<Home/>:<Login/>}
    </div>
  );
}

export default App;
