import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import Logo from '../../../../public/cypresslogo.svg';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const routes = [
  { title: 'Features', href: '#features' },
  { title: 'Resources', href: '#resources' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Testimonials', href: '#testimonials' },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const Header = () => {
  const [path, setPath] = useState('#products');

  return (
    <header className="flex justify-center items-center p-4">
      <NavLink to="/" className="w-full flex items-center gap-2">
        <img src={Logo} alt="Cypress Logo" width={25} height={25} />
        <span className="font-semibold dark:text-white">cypress.</span>
      </NavLink>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn({
                'dark:text-white': path === '#resources',
                'dark:text-white/40': path !== '#resources',
                'font-normal': true,
                'text-xl': true,
              })}
              onClick={() => setPath('#resources')}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] ld:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <span
                    className="flex flex-col justify-end h-full w-full p-6 select-none rounded-md
                        bg-gradient-to-b from-muted/50 to-muted no-underline outline-none
                        focus:shadow-md"
                  >
                    Welcome
                  </span>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* TODO: complete nav menu */}
      <aside className="flex justify-end gap-2 w-full">
        <NavLink to="login">
          <Button variant="btn-secondary" className="hidden p-1 sm:block">
            Login
          </Button>
        </NavLink>
        <NavLink to="/signup">
          <Button variant="btn-primary" className="whitespace-nowrap">
            Sign Up
          </Button>
        </NavLink>
      </aside>
    </header>
  );
};

export default Header;
