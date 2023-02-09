import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="container relative mx-auto bg-slate-200 px-1 py-3 ">
      <h1 className=" font-logo text-2xl">
        <a href="#">DEV MALL</a>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
