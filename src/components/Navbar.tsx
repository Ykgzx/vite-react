import { NavLink } from 'react-router-dom';
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

function Navbar() {

    return (
        <>
            <nav className="fixed h-20 w-full bg-black text-white flex items-center justify-between px-10 z-30">
                <div>
                    <NavLink to="/"><HomeIcon className="text-blue-500 bg-gray-800 p-4 rounded-full w-14 h-14 flex justify-center items-center" /></NavLink>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <MagnifyingGlassIcon className="text-blue-500 bg-gray-800 p-3 rounded-full w-12 h-12 flex justify-center items-center" />
                    <input type="text" className="border border-2 border-gray-300 rounded-full p-2 w-64" placeholder='Find Something You Want'/>
                </div>
                <div>
                    <NavLink to="/Profile"><UserIcon className='text-blue-500 bg-gray-800 p-3 rounded-full w-14 h-14 flex justify-center items-center' /></NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar