import React from 'react';

import './App.css';

function App() {
  let name = '테토포';
  return (
    <div className="App">
      <header className="App-header">안녕하세요 리액트 초짜입니다</header>
      <p className="App-content">
        병아리 개발자 {name === '테토포' ? <h1>{name}</h1> : null}에요
      </p>
    </div>
  );
}

export default App;
