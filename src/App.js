import './App.css';
import Groups from './components/groups';
import Map from './components/map';

/*

- Create dictionary of countries and their ID
- Handle click on country
- Groups creation
- Provider with existed group
- Fill countries with groups color

*/

function App() {
  return (
    <div className="App">
		  <Groups />
      <Map />
    </div>
  );
}

export default App;
