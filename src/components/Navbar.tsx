import { Link } from 'react-scroll';

function Navbar() {
    
        const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Optional: adds a smooth scrolling animation
            });
        };

    return (
        <>
            <nav className="fixed h-20 w-full bg-gray-700 text-white flex items-center justify-between px-10 z-20">
                <div>
                    <button onClick={scrollToTop} className='text-2xl font-bold hover:underline hover:text-blue-400'>
                        Home
                    </button>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button>
                        <Link to="section1" smooth={true} duration={500}>
                            <h1 className="text-lg font-bold hover:underline hover:text-blue-400">Page 1</h1>
                        </Link>
                    </button>
                    <button>
                        <Link to="section2" smooth={true} duration={500}>
                            <h1 className="text-lg font-bold hover:underline hover:text-blue-400">Page 2</h1>
                        </Link>
                    </button>
                    <button>
                        <Link to="section3" smooth={true} duration={500}>
                            <h1 className="text-lg font-bold hover:underline hover:text-blue-400">Page 3</h1>
                        </Link>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar