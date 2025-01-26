

import Home from './components/Home.tsx';
import Blog1 from './components/blog/Blog1.tsx';
import { Routes, Route } from 'react-router-dom';
import Blog3 from './components/blog/Blog3.tsx';
import Blog2 from './components/blog/Blog2.tsx';
import Blog4 from './components/blog/Blog4.tsx';
import HumanVsAI from './components/HumanVsAI.tsx';
import TeamMembers from './components/TeamMembers.tsx';
import PrivacyPolicy from './components/policies/PrivacyPolicy.tsx';
import RefundPolicy from './components/policies/RefundPolicy.tsx';
import TermsOfService from './components/policies/TermsOfService.tsx';
import PricingPage from './components/PricingPage.tsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/7_Industries_Revolutionized" element={<Blog1/>}></Route>
       <Route path="/Human-vs-AI" element={<HumanVsAI/>}></Route>
       <Route path="/Revolutionizing_Customer_Support" element={<Blog2/>}></Route>
      <Route path="/Your_Guide_to_Adopting_AI-Driven" element={<Blog3/>}></Route>
      <Route path="/Top_10_Essential_Features" element={<Blog4/>}></Route> 
      <Route path="/team" element={<TeamMembers/>}></Route> 
      <Route path='pricing' element={<PricingPage/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  );
};

export default App;