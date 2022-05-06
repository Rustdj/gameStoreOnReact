import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home-page/home-page.jsx';
import { Header } from './components/header/header';
import { store } from './redux';
import { GamePage } from './pages/game-page/game-page';
import { OrderPage } from './pages/order-page/order-page';

function App() {
  return (
    
      <div className="App">
        <Provider store={store}>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/app:title" element={<GamePage />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
        </Provider>
      </div>
    
  );
}

export default App;
