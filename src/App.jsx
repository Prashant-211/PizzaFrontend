import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Denied'
import Addproduct from './Pages/Admin/Addproduct'

function App() {

  return (
    <div>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/Login" element={<Login />} />

        <Route path="/admin/addproduct" element={<Addproduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>        
    </div>
  )
}

export default App
