import type { ReactNode } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import './HomeButton.css';

type HomeButtonProps = {
  to: string;
  animate: boolean;
  children: ReactNode;
};

const HomeButton = ({ to, animate, children, ...rest }: HomeButtonProps) => {
  const btnClasses = classNames({
    homeButton: true,
    animate
  });

  return (
    <Link to={to} {...rest} className={btnClasses}>
      {children}
    </Link>
  );
};

export default HomeButton;
