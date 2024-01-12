
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
    <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center flex font-bold shadow-md">
    <p className='blue-gradient_text'>KIITFEST</p>
    </NavLink>

    <nav className='flex text-lg gap-7 font-medium'>

    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
    About
    </NavLink>
    <NavLink to="/events" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
    Events
    </NavLink>
    <NavLink to="/login" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
    Login
    </NavLink>


    </nav>


    </header>
  )
}

export default Navbar