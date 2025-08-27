import logo from './logo.svg';
import './App.css';
import search from './components/search/search';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <search onSearchChange = {handleOnSearchChange}/>
    </div>
  );
}

export default App;
