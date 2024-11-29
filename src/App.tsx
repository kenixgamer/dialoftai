

import Home from './components/Home.tsx';
import Blog1 from './components/blog/Blog1.tsx';
// import Blog2 from './components/blog/Blog2.tsx';
// import Blog3 from './components/blog/Blog3.tsx';
// import Blog4 from './components/blog/Blog4.tsx';

import { Routes, Route } from 'react-router-dom';
import Blog3 from './components/blog/Blog3.tsx';
import Blog2 from './components/blog/Blog2.tsx';
import Blog4 from './components/blog/Blog4.tsx';
import HumanVsAI from './components/HumanVsAI.tsx';
import TeamMembers from './components/TeamMembers.tsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog1" element={<Blog1/>}></Route>
       <Route path="/Human-vs-AI" element={<HumanVsAI/>}></Route>
       <Route path="/blog2" element={<Blog2/>}></Route>
      <Route path="/blog3" element={<Blog3/>}></Route>
      <Route path="/blog4" element={<Blog4/>}></Route> 
      <Route path="/team" element={<TeamMembers/>}></Route> 
    </Routes>
  );
};

export default App;