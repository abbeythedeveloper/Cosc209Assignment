
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

function App() {

  return (
  <div>
      <nav className='flex z-10 fixed -mx-4 top-0 w-full items-center justify-between my-4'>
        <h1 className='text-2xl italic cursor-pointer hover:text-4xl duration-300 ease-in-out ml-5'>yourGirlsMainss</h1>
        <ul className='text-xl flex gap-4'>
          <li className='hover:-translate-y-3 duration-300 ease-in-out'><Link to="/">Home</Link></li>
          <li className='hover:-translate-y-3 duration-300 ease-in-out'><Link to="/About">About</Link></li>
          <li className='hover:-translate-y-3 duration-300 ease-in-out'><Link to="/Services">Services</Link></li>
          <li className='hover:-translate-y-3 duration-300 ease-in-out'><Link to="/Contact">Contact</Link></li>
        </ul>
        <button className='bg-black rounded-md p-1 hover:bg-slate-800 duration-200 ease-in-out hover:-translate-y-2 mr-20'>Explore</button>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
  </div>
  )
}

export default App
