import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage';
import PracticePage from './components/practicePage';
import TestPage from './components/testPage';
import Bubble from './components/sorts/Bubble';
import Insertion from './components/sorts/Insertion';
import Selection from './components/sorts/Selection';
import Merge from './components/sorts/Merge';
import Quick from './components/sorts/Quick';
import SortingAlgorithmsPage from './components/sorts/SortingAlgorithmsPage';

import {OtherSort,Overview,Practice} from './components/sorts/OtherSort';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/visualizer" element={<SortingAlgorithmsPage />} />
        <Route path="/bubble" element={<Bubble />} />
        <Route path="/insertion" element={<Insertion />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/merge" element={<Merge />} />
        <Route path="/quick" element={<Quick />} />
      
        <Route path="/other" element={<OtherSort />} />
        <Route path="/other/overview" element={<Overview />} />
        <Route path="/other/practice" element={<Practice />} />

        <Route path="/test" element={<TestPage />} />

        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
