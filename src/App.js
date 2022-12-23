import logo from './logo.svg';
import './App.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { Routes,Route } from 'react-router-dom';
import OrderReview from './component/OrderReview/OrderReview';
import Grandpa from './component/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
        <Header></Header>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/order' element={<OrderReview></OrderReview>}></Route>
              <Route path='/famaly' element={<Grandpa></Grandpa>}></Route>
          </Routes>
    </div>
  );
}

export default App;
