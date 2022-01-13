import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className='py-5 bg-primary text-center'>
        <h1 className="text-center text-white">HOME HEADER</h1>
        <ul className='d-flex justify-content-around'>
        <li>
            <Link to={'/'} className='text-white'>
              HOME
            </Link>
          </li>
          <li>
            <Link to={'/bidu'} className='text-white'>
              BIDU
            </Link>
          </li>
          <li>
            <Link to={'/stdio'} className='text-white'>
              STDIO
            </Link>
          </li>
        </ul>
      </div>
      ;
    </React.Fragment>
  );
};

export default Header;
