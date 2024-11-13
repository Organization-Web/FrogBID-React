import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Faq from "./Pages/faq";
import Contact from "./Pages/contact";
import WebDevelopment from "./Pages/webDevelopment";
import WebResearch from "./Pages/webResearch";
import GraphicDesign from "./Pages/graphicDesign";
import Seo from "./Pages/seo";
import Ppc from "./Pages/ppc";
import SocialMedia from "./Pages/socialMedia";
import ContentManagement from "./Pages/contentManagement";
import EmailMarketing from "./Pages/emailMarketing";
import AnalyticsReporting from "./Pages/analyticsReporting";
import ReputationManagement from "./Pages/reputationManagement";
import Advertising from "./Pages/advertising";
import LeadGeneration from "./Pages/leadGeneration";
import PrivacyPolicy from "./Pages/privacyPolicy";
import TermsCondition from "./Pages/terms&Condition";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
      <div>
          <BrowserRouter>
              <ScrollToTop/>
              <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/About' element={<About/>}></Route>
                  <Route path='/Portfolio' element={<Portfolio/>}></Route>
                  <Route path='/Faq' element={<Faq/>}></Route>
                  <Route path='/Contact' element={<Contact/>}></Route>
                  <Route path='/Web-Development' element={<WebDevelopment/>}></Route>
                  <Route path='/Web-Research' element={<WebResearch/>}></Route>
                  <Route path='/Graphic-Design' element={<GraphicDesign/>}></Route>
                  <Route path='/SEO' element={<Seo/>}></Route>
                  <Route path='/PPC' element={<Ppc/>}></Route>
                  <Route path='/Social-Media-Marketing' element={<SocialMedia/>}></Route>
                  <Route path='/Content-Writting' element={<ContentManagement/>}></Route>
                  <Route path='/Email-Marketing' element={<EmailMarketing/>}></Route>
                  <Route path='/Analytics-Reporting' element={<AnalyticsReporting/>}></Route>
                  <Route path='/Reputation-Management' element={<ReputationManagement/>}></Route>
                  <Route path='/Advertising' element={<Advertising/>}></Route>
                  <Route path='/Lead-Generation' element={<LeadGeneration/>}></Route>
                  <Route path='/Privacy-Policy' element={<PrivacyPolicy/>}></Route>
                  <Route path='/T&C' element={<TermsCondition/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App