import './index.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page/home-page.jsx';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
