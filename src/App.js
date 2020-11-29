import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './components/Welcome'
import Overview from './components/Overview'
import './App.css';


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/groupFourToDo' component={Welcome}/>
          <Route path='/overview' component={Overview}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
