import React from 'react';

import './App.css';

import Todolist from './Todolist';

function App() {
  let name = '테토포';

  {
    /* 
		작성자 : 누구누구
		작성일 : 2020~~
		내용 : 기능에 대한 간략 내용
 */
  }

  return (
    <div className="App">
      <Todolist></Todolist>
    </div>
    // 주석을 사용합니다.
  );
}

export default App;
