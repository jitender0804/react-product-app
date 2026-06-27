import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Unable to load products. Please check your internet connection.");
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">{error}</h3>
      </div>
    );
  }


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );



  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>

          <p className="mt-3 fw-bold">Loading products...</p>
        </div>
      </div>
    );
  }


  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= fullStars ? "⭐" : "☆"
      );
    }

    return stars.join(" ");
  };

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <div className="container-fluid px-4 mt-4">
        {filteredProducts.length === 0 ? (
          <h3 className="text-center mt-5">No products found</h3>
        ) : (
          <ProductList
            filteredProducts={filteredProducts}
            renderStars={renderStars}
          />
        )}
      </div>
      <Footer />
    </div>
    
  );
}

export default App;