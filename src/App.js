import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import ProductCards from './components/groups/ProductCards/productCards';
import Header from './components/groups/header';

function App() {
  return (
  <Provider store ={store}>
    <div className="App">
        <Header/>
        <ProductCards/>
    </div>
   </Provider> 
  );
}

export default App;
