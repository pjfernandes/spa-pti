import './App.css';
import ProductCard from './components/ProductCard';

const foodData = { name: "Stewed cabbage with sauce", price: 5.90, image: "https://www.mygorgeousrecipes.com/wp-content/uploads/2020/02/Stewed-Cabbage-1.jpg"};

function App() {
  return (
    <div className="App">
      <ProductCard data={foodData}/>
    </div>
  );
}

export default App;
