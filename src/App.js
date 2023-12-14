import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { Container } from './components/layout/Container';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Company } from './components/pages/Company';
import { Contact } from './components/pages/Contact';
import { Home }  from './components/pages/Home';
import { NewProject } from './components/pages/NewProject';
import { Project } from './components/pages/Project';
import { Projects } from './components/pages/Projects';

function App() {
  return (
    

    <Router>
      <Navbar/>
    <Container customClass="min-height" >
    
      
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="/newproject" element={<NewProject />} />

    </Routes>
    
    </Container>
    <Footer/>
    </Router>
    
  );
}

export default App;