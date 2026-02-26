import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Proflie from './pages/Profile';

function App() {
 
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <Sidebar />
        <div className='min-h-screen bg-gray-50 font-sans pl-40'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Proflie />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
