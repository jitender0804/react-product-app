function ProductCard({ product, renderStars }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card h-100 d-flex flex-column product-card">
                <img
                    src={product.image}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                    alt={product.title}
                />

                <div className="card-body d-flex flex-column">
                    <h6 className="card-title">
                        {product.title.slice(0, 40)}...
                    </h6>

                    <p className="text-muted flex-grow-1" style={{ fontSize: "12px" }}>
                        {product.description
                            ? product.description.slice(0, 80)
                            : "No description available"}
                    </p>

                    <div>
                        <p className="fw-bold mb-1">₹ {product.price}</p>
                        <p className="mb-0">
                            {renderStars(product.rating?.rate || 0)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );}
export default ProductCard;
