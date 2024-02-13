import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import BiographyPage from './components/Pages/BiographyPage';
import PorfolioPage from './components/Pages/PortfolioPage';
import ResumephyPage from './components/Pages/ResumePage';
import VideoPage from './components/Pages/VideoPage';
import ContactsPage from './components/Pages/ContactsPage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1 className="App_mainTitle">
          Виктория <br />
          Волкова
        </h1> */}
        <div className="navigation">
          <Link to="/biography" className='linkButton'>
            <MyButton>Биография</MyButton>
          </Link>
          <Link to="/portfolio" className='linkButton'>
            <MyButton>Портфолио</MyButton>
          </Link>
          <Link to="/resume" className='linkButton'>
            <MyButton>Резюме</MyButton>
          </Link>
          <Link to="/video" className='linkButton'>
            <MyButton>Видео</MyButton>
          </Link>
          <Link to="/contacts" className='linkButton'>
            <MyButton>Контакты</MyButton>
          </Link>
        </div>
        <Routes>
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/portfolio" element={<PorfolioPage />} />
          <Route path="/resume" element={<ResumephyPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
