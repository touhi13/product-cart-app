import './assets/css/App.css';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Route from './router/Route';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className="py-16">
        <Route path="/">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </main>
    </Provider>
  );
}

export default App;
