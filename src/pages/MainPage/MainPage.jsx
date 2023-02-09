import PageTemplate from '../../template/PageTemplate';
import ProductList from '../../components/ProductList/ProductList';

const MainPage = () => {
  return (
    <PageTemplate>
      <article>배너</article>
      <ProductList />
      {/* <ul>
        <li>
          <img src="" alt="" />
          <span>우당탕탕 라이캣의 실험실</span>
          <strong>Hack Your Life 개발자 노트북 파우치</strong>
          <strong>
            29,000<span>원</span>
          </strong>
        </li>
      </ul> */}
    </PageTemplate>
  );
};

export default MainPage;
