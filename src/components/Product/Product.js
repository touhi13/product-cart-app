import AddProduct from "./AddProduct";
import ProductContainer from "./ProductContainer";

export default function Product() {
    return (
        <>
            <div className="productWrapper">
                <ProductContainer />
                <AddProduct />
            </div>
        </>

    )
}
