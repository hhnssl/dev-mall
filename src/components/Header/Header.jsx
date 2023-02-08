const Header = () => {
  return (
    <header className="container bg-slate-200">
      <h1>데브몰로고</h1>
      <nav>
        <form action="">
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button>검색</button>
        </form>
      </nav>

      <button>장바구니</button>
      <button>마이페이지</button>

      {/* 
      
      <button>마이페이지</button>
      <button>판매자 센터</button> */}
    </header>

    // <header><h1>데브몰로고 판매자센타</h1></header>
  );
};

export default Header;
