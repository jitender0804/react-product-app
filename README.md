# 🛒 React Product App

A responsive product listing web application built using React.js.  
It fetches products from a public API and allows users to search products in real time with proper loading and error handling.

---

## 🚀 Live Demo
🔗 https://react-product-9n8xdx42i-react-apps.vercel.app

---

## 📸 Features

- 🔍 Real-time product search using input field
- 📦 Product listing from external API
- ⭐ Product rating display using custom star function
- ⚡ Loading spinner while fetching API data
- ❌ Error handling for API failure
- 🧾 "No products found" message for invalid search
- 📱 Fully responsive UI for mobile and desktop
- 🧭 Navbar and Footer components
- 🖱️ Hover effects on product cards

---

## 🛠️ Technologies Used

- React.js (Functional Components)
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap (for layout and responsiveness)

---

## 🌐 API Used

Products are fetched from:

https://fakestoreapi.com/products

---

## 🧠 State Management

This project uses React Hooks:

- `useState`:
  - search input state
  - product data state
  - loading state
  - error state

- `useEffect`:
  - Fetch API data when component mounts

---

## 🧩 Component Structure

This application follows a simple and clean component-based structure:

App.jsx (Main Component)
 ├── Navbar.jsx (Search bar)
 ├── ProductList.jsx (Handles products list)
 │     └── ProductCard.jsx (Single product UI)
 └── Footer.jsx (Bottom layout)
