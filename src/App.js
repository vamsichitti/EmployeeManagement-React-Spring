
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import AddEmployeeComponent from './Components/AddEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = {<ListEmployeeComponent />}/>
              <Route path = "/employees" element = {<ListEmployeeComponent />}/>
              <Route path = "/create" element = {<AddEmployeeComponent />}/>
              <Route path = "/edit/:id" element = {<AddEmployeeComponent />}/>
            </Routes>
        </div>
        
        </Router>
      
    </div>
  );
}

export default App;
