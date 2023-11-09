import Details from "../components/productDetail/Details"
import RelatedProducts from "../components/productDetail/RelatedProducts"
import DetailTabbedNavigation from "../components/productDetail/DetailTabbedNavigation"

  const ProductDetail = () => {
  return (
    <>
      <Details/>
      <DetailTabbedNavigation/>
      <RelatedProducts/>
    </>
  )
}

export default ProductDetail