import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

export default function ProductContainer() {
    const products = useSelector((state) => state.product)
    return (
        // <!-- products container -->
        <div className="productContainer" id="lws-productContainer">
            {
                products.length > 0
                    ? products.map((product) =>
                        <ProductItem key={product.id} product={product} />
                    )
                    : <p>No Product Found!</p>
            }
        </div>
        // <!-- products container ends -->
    )
}
