
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Contact from './components/Cont/Cont';
import Foot from './components/Foot/Foot';
import Edu from './components/Edu/Edu';
import Profiles from './components/Profiles/Profiles';


const App = () => {


  return (

    <Router>
      <div className='app'>
        <Nav/>
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>
            
            <Route exact path='/Edu'>
               <Edu/>
            </Route>
            
            <Route exact path='/Profiles'>
               <Profiles/>
            </Route>

            <Route exact path='/Cont'>
               <Contact/>
            </Route>

          </Switch>
        
          <Foot/>
      </div>
      
    </Router>
  );
};

export default App;