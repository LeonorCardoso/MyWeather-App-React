import "./App.css";
import axios from "axios";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<div className="app-container">
				<Weather defaultCity="Lisbon" />
			</div>
		</div>
	);
}

export default App;
