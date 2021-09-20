 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Mainpages from "./Mainpages"
import Landingpage from "./Landingpage"
 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      

	  <Router>
	 
	 <Switch>
		 <Route exact path="/"><Landingpage /></Route>
		 <Route path="/Mainpages"><Mainpages />  </Route>		 
	 </Switch>
 </Router>
    </div>
  );
}

export default App;
