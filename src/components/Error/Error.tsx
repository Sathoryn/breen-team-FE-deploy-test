import type { ReactNode } from 'react';
import { Link } from 'react-router';
import './Error.css';

type ErrorProps = {
  children: ReactNode;
};

const Error = ({ children }: ErrorProps) => {
  return (
    <div className='error'>
      {children}
      <Link to='/'>Back to Home Page</Link>
    </div>
  );
};

export default Error;
