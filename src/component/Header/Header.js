import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className='bg-white py-4'>
           <div className="container md:w-[90%] m-auto flex items-center justify-between">
                <h6 className='font-bold'>LOGO</h6>

                <ul className='md:flex block'>
                    <li className='px-3'>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                     <li className='px-3'>
                        <Link to="/order">
                            Order
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/famaly">
                            Famaly
                        </Link>
                    </li>
                    
                </ul>
           </div>
        </div>
    );
};

export default Header;