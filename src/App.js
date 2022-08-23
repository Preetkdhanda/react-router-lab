import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Pricing from './components/Pricing';
import NavBar from './components/NavBar';
import Preet from './components/Preet';
import ErrorPage from './components/ErrorPage';


const App = ()=> {

  let initalPricing = [

    {level: "Hobby", cost : 0},
    {level: 'Startup', cost :10},
    {level: 'Enterprise', cost : 100}
  ]

  const [pricing, setPricing] = useState(initalPricing);
  
  return (
    <Router>

      <NavBar/>

      <Routes>


      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/pricing' element={<Pricing prices={pricing}/>}/>
      <Route path='/preet' element={<Preet/>}/>
      <Route path='*' element={<ErrorPage/>}/>


      

      </Routes>

    </Router>
  )

}

export default App;
