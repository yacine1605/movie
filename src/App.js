import './App.css';
import Detail from './Components/Detail';
import Principale from './Components/Principale';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	//
	return (
		<Router>
			<Switch>
				<Route exact path="/"></Route>
				<Principale />
				<Route path="/:movie_id"></Route>
				<Detail />
			</Switch>
		</Router>
	);
}

export default App;
