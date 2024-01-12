import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Events, Login } from "./pages";


const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/login' element={<Login/>} />

          
        </Routes>
      </Router>
    </main>
  )
}

export default App