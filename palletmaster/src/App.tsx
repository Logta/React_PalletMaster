import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Setting from './containers/Setting';
import Making from './containers/Making';
import './App.css';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar 
          //mobile={navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i) == null}
          open={open}
          setOpen={setOpen}
          />
        </header>

        <div className='App-main' id='app-main'>
          <Route exact path='/' component={Main}/>
          
          <Route path='/home' render={() => <Home openMobile={open} setOpenMobile={setOpen}/>}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/setting' component={Setting} />
          <Route exact path='/making' component={Making} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
