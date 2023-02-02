import { useEffect, useState } from 'react';
import About2 from './About/About2';
import './App.css';
import Carlist2 from './Carlist/Carlist2';
import { Features } from './Features/Features';
import { Baleno_features } from './Features/Baleno_features';
import { Creta_features } from './Features/Creta_features';
import { Tiago_features } from './Features/Tiago_features';
import { Swift_features } from './Features/Swift_features';
import { Scr_features } from './Features/Scr_features';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import { PuffLoader } from 'react-spinners';
import Contact from './Contact/Contact';


function App() {

  const [loading, setLoading ] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])

  return (

    <BrowserRouter>
   <>

    {
      loading ?

      <div className='App'>
      <PuffLoader
      color={"rgb(0, 255, 128)"}
      loading={loading}
      size={90}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      </div>
      :
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/carlist2' element={<Carlist2/>}/>
      {/* <Route path='/features' element={<Features/>}/> */}
      <Route path='/Baleno_features' element={<Baleno_features/>}/>
      <Route path='/Creta_features' element={<Creta_features/>}/>
      <Route path='/Tiago_features' element={<Tiago_features/>}/>
      <Route path='/Swift_features' element={<Swift_features/>}/>
      <Route path='/Scr_features' element={<Scr_features/>}/>
      <Route path='/About2' element={<About2/>}/>  
      <Route path='/Contact' element={<Contact/>}/>  

      <Route path='/about' element={<About2/>}/>
    </Routes>
    }

   </>
   </BrowserRouter>

  );
}

export default App;
