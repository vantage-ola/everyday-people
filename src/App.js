import Home from "./components/Home";
import { DefaultStyle } from "./DefaultStyle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <DefaultStyle/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>


    </>

  );
}

export default App;
