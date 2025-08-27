import logo from './logo.svg';
import './App.css';
import Search from './components/search/search.js';
import CurrentWeather from './components/current-weather/current-weather.js';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
