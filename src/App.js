import './App.css';
import Category from './components/Category';
import Header from './components/Header';
import TopRestaurants from './components/TopResturants';

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <TopRestaurants/>
    </div>
  );
}

export default App;
