import { NavLink } from 'react-router-dom';

import LoginForm from './LoginForm';
import Logo from '../../../../public/cypresslogo.svg';

const LoginPage = () => {
  return (
    <div>
      <div className="mb-6">
        <NavLink to="/" className="flex justify-start items-center w-full">
          <img src={Logo} width={50} height={50} alt="cypress Logo" />
          <span className="ml-2 font-semibold text-4xl dark:text-white">
            cypress.
          </span>
        </NavLink>
        <div className="mt-4 text-sm text-foreground/60">
          An all-In-One Collaboration and Productivity Platform
        </div>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
