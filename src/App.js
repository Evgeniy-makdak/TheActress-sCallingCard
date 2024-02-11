import './styles/App.css';
import MyButton from './components/UI/button/MyButton';

function App() {
  return (
    <div className="App">
      <h1 className="App_mainTitle">Виктория <br />Волкова</h1>
      <div className="MyButton">
        <MyButton>Биография</MyButton>
        <MyButton>Портфолио</MyButton>
        <MyButton>Резюме</MyButton>
        <MyButton>Видео</MyButton>
        <MyButton>Контакты</MyButton>
      </div>
    </div>
  );
}

export default App;
