function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-12 col-md-6 mb-3">
            <h5>React Product App</h5>
            <p className="mb-0">
              Browse and search products with a clean, responsive interface.
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none">Home</a></li>
              <li><a href="#" className=" text-decoration-none">Products</a></li>
              <li><a href="#" className=" text-decoration-none">Search</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pt-3 border-top border-secondary">
          <small>© 2026 React Product App. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;