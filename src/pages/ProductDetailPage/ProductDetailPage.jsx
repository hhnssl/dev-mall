import PageTemplate from '../../template/PageTemplate';
import ProductDetailItem from '../../components/ProductDetailItem/ProductDetailItem';

const ProductDetailPage = () => {
  return (
    <PageTemplate>
      <section>
        <ProductDetailItem />

        <div className="mb-10">
          <button className="rounded-l bg-gray-100 py-2 px-4 font-bold">
            -
          </button>
          <span className=" border-y border-gray-100 py-2 px-4 font-bold">
            1
          </span>
          <button className="rounded-r bg-gray-100 py-2 px-4 font-bold">
            +
          </button>
        </div>

        <div className="mb-10 flex justify-between">
          <span className="">총 상품 금액</span>
          <div>
            <span className="mr-2">
              총 수량 <strong>1</strong>개
            </span>
            <strong>
              17,500 <span>원</span>
            </strong>
          </div>
        </div>

        <div>
          <button className="mr-3 mb-10 rounded border border-blue-500 py-2 px-4 font-semibold text-blue-700  hover:bg-blue-500 hover:text-white">
            바로 구매
          </button>
          <button className="rounded border border-blue-500 py-2 px-4 font-semibold text-blue-700  hover:bg-blue-500 hover:text-white">
            장바구니
          </button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default ProductDetailPage;
