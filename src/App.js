
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Client from './components/Clients';






function App() {

  
  

  return (
    <div className="App">


     
      
      <Router>
        <Header/>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/client" element={<Client/>}/>
        </Routes>
      </Router>
            
    </div>
   
  );
}

export default App;
