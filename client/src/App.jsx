
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Registrationpage/Signup'
import Signin from  './components/Registrationpage/Signin'
import Dashboard from './components/Dashboard/Dashboard'
function App() {
  
  return (
    <>

    
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/signin" element={<Signin />} />
     </Routes>
   </BrowserRouter>
     
    </>
  )
}


export default App
