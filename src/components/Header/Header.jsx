import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container relative mx-auto bg-slate-200 px-4 py-3 ">
      <h1 className=" font-logo text-2xl">
        <Link to="/">DEV MALL</Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
