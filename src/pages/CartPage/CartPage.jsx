import PageTemplate from '../../template/PageTemplate';
import CartList from '../../components/CartList/CartList';

const CartPage = () => {
  return (
    <PageTemplate>
      <section>
        <h1 className="mb-5 text-xl font-bold">장바구니</h1>
        <div className="mb-7 inline-flex w-full items-center justify-between rounded bg-gray-200 py-2 px-4 font-bold text-gray-800">
          <span>상품 정보</span>
          <span>수량</span>
          <span>상품 금액</span>
        </div>
        CartList
      </section>
    </PageTemplate>
  );
};

export default CartPage;
