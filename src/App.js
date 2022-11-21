import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
       <Route path='/' element ={<SignIn/>}/>
        <Route path='/registration' element ={<SignUp/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
