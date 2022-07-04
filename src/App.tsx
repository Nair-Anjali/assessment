import React from "react";
import './App.css';
import { BaseButton } from './components/Button/BaseButton';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className='bannerColor'> KORU ASSESSMENT</div>
      <BaseButton id="openMpdalBtn" title="Show Data" />
    </div>
  );
}

export default App;
