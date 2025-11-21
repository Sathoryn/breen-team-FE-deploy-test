import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className='button' {...rest}>
      {children}
    </button>
  );
};

export default Button;
