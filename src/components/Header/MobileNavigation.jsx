// 기본

import NavLinks from './NavLinks';
import { HiMenu } from 'react-icons/hi';

import { useState } from 'react';

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className=" md:hidden">
      <HiMenu
        onClick={() => setOpenMenu(!openMenu)}
        className="absolute top-3 right-0 h-auto w-[30px] cursor-pointer"
      />
      {openMenu && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
