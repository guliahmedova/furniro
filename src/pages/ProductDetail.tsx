import DetailTabbedNavigation from "../components/productDetail/DetailTabbedNavigation";
import Details from "../components/productDetail/Details";
import RelatedProducts from "../components/productDetail/RelatedProducts";

const ProductDetail = () => {
  return (
    <>
      <Details />
      <DetailTabbedNavigation />
      <RelatedProducts />
    </>
  )
}

export default ProductDetail;