import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../Constants';


const Nav = () => {
    return (
        <header className='absolute z-10 w-full py-8 padding-x'>
            <nav className='flex items-center justify-between max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt='Logo'
                        width={130}
                        height={29}
                        className='m-0 w-[129px] h-[29px]'
                    />
                </a>
                <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href="item-href"
                                    className='text-lg leading-normal font-montserrat text-slate-gray'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav