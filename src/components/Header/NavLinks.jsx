// 네이게이션과 모바일네비게이션에서 공통으로 사용할 컴포넌트
import { HiOutlineShoppingCart, HiOutlineUserCircle } from 'react-icons/hi2';

const NavLinks = () => {
  return (
    <ul className="flex flex-col items-center py-10 text-2xl">
      <li className="mb-10">
        <a className="flex items-center" href="#">
          <HiOutlineShoppingCart className="mx-auto mr-3" />
          <strong className="text-sm">장바구니</strong>
        </a>
      </li>
      <li>
        <a className="flex items-center" href="#">
          <HiOutlineUserCircle className="mx-auto mr-3" />
          <strong className="text-sm">로그인</strong>
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
