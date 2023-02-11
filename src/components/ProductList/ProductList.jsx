import { useSelector } from 'react-redux';

import ProductListItem from '../ProductListItem/ProductListItem';

const ProductList = () => {
  const products = useSelector((state) => state.product.productList);

  return (
    <section className="">
      <ul className="flex flex-wrap">
        {products.map((item) => (
          <ProductListItem
            key={item.product_id}
            image={item.image}
            productName={item.product_name}
            price={item.price}
            storeName={item.store_name}
            productId={item.product_id}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
