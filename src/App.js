import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      { 
      authIsReady 
      ? 
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            {user ? <Home/> : <Redirect to='/login'/>}
          </Route>
          <Route path='/login'>
            {user ? <Redirect to='/'/> : <Login/>}
          </Route>
          <Route path='/signup'>
            {user ? <Redirect to='/'/> : <Signup/>}
          </Route>
        </Switch>
      </BrowserRouter>
      :
      null
      }
    </div>
  );
}

export default App
