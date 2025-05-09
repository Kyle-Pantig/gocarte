import ProductBox from "./ProductBox";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
    </div>
  );
};

export default ProductGrid;
