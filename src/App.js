import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home-page/home-page.jsx';
import { Header } from './components/header/header';
import { store } from './redux';

function App() {
  return (
    
      <div className="App">
        <Provider store={store}>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Provider>
      </div>
    
  );
}

export default App;
