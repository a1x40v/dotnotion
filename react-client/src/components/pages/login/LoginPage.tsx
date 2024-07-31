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
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
