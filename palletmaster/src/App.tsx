import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Setting from './containers/Setting';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>

        <div className='App-main' id='app-main'>
          <Route exact path='/' component={Main}/>
          
          <Route path='/home' component={Home} container={document.getElementById("app-main")}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/setting' component={Setting} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
