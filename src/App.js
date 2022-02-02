import logo from './logo.svg';
import './App.css';

import Main from './main/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Шапка
      </header>
      <body>
        <img src={logo} className="App-logo" alt="logo" />
        <Main />
      </body>
    </div>
  );
}

export default App;
