import logo from './logo.svg';
import './App.css';

import Main from './main/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Шапка
      </header>
      <body className="App-header alt-bg">
        <img src={logo} className="App-logo" alt="logo" />
        <Main />
      </body>
      <footer className="App-header alt-bg-m">
       <img src={logo} className="App-logo" alt="logo" />
        Тут футер
      </footer>
    </div>
  );
}

export default App;
