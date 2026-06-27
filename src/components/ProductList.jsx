import ProductCard from "./ProductCard";

function ProductList({ filteredProducts, renderStars }) {
    return (
        <div className="row">
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    renderStars={renderStars}
                />
            ))}
        </div>
    );
}
export default ProductList;