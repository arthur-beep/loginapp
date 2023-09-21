import { Route, Routes } from "react-router-dom"
import Login from './Login';
import Home from './Home';
import Signup from './Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/Home' element={<Home />}></Route>
    </Routes>
  )
}

export default App