import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import { useEffect, useState } from 'react';

function App() {
  const productsInfo = [
    {
      name: "Esprit Ruffle Shirt",
      price: 16.64,
      image: require('./components/products/images/product-01.jpg.webp'),
      boxId: "box1",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "White Dress Shirt",
      price: 35.31,
      image: require('./components/products/images/product-02.jpg.webp'),
      boxId: "box2",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Polo Ralph Shirt",
      price: 25.50,
      image: require('./components/products/images/product-03.jpg.webp'),
      boxId: "box3",
      type: 'men',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Classic Trench Coat",
      price: 75.00,
      image: require('./components/products/images/product-04.jpg.webp'),
      boxId: "box4",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Front Pocket Jumper",
      price: 34.75,
      image: require('./components/products/images/product-05.jpg.webp'),
      boxId: "box5",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "CHPO Nando Watch",
      price: 34.75,
      image: require('./components/products/images/product-06.jpg.webp'),
      boxId: "box6",
      type: 'watch',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Shirt in Stretch Cotton",
      price: 52.66,
      image: require('./components/products/images/product-07.jpg.webp'),
      boxId: "box7",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Cactus T-Shirt",
      price: 18.96,
      image: require('./components/products/images/product-08.jpg.webp'),
      boxId: "box8",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Converse Chuk Sneaker",
      price: 75.00,
      image: require('./components/products/images/product-09.jpg.webp'),
      boxId: "box9",
      type: 'shoes',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Femme T-Shirt In Stripe",
      price: 25.85,
      image: require('./components/products/images/product-10.jpg.webp'),
      boxId: "box10",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Mizzen Hampton Shirt",
      price: 63.16,
      image: require('./components/products/images/product-11.jpg.webp'),
      boxId: "box11",
      type: 'men',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Leather Belt",
      price: 18.96,
      image: require('./components/products/images/product-12.jpg.webp'),
      boxId: "box12",
      type: 'men',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "White T-Shirt",
      price: 18.49,
      image: require('./components/products/images/product-13.jpg.webp'),
      boxId: "box13",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Kids Bestag",
      price: 54.79,
      image: require('./components/products/images/product-14.jpg.webp'),
      boxId: "box14",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Mini Silver Mesh Watch",
      price: 86.85,
      image: require('./components/products/images/product-15.jpg.webp'),
      boxId: "box15",
      type: 'watch',
      status: 'notAdded',
      noItems: 0
    },
    {
      name: "Black T-Shirt",
      price: 29.64,
      image: require('./components/products/images/product-16.jpg.webp'),
      boxId: "box16",
      type: 'women',
      status: 'notAdded',
      noItems: 0
    }
  ]

  const [addedProds, setAddedProds] = useState(productsInfo);
  const [addedProducts, setAddedProducts] = useState([]);
  const [showProd, setShowProd] = useState([]);

  const addProductsArr = () => {
    const addedProducts = addedProds.filter((product) => {
      return product.status === 'added';
    })
    setAddedProducts(addedProducts);
  }
  const handleAddedProds = (id, noProds) => {
    let addedArray = addedProds.map((products) => {
      if (products.boxId === id) {
        return { ...products, status: 'added', noItems: noProds };
      }
      return products;
    })
    setAddedProds(addedArray);
    addProductsArr();

  }


  const handleShowProd = (id) => {
    const clikedProduct = addedProds.filter((product) => {
      return product.boxId === id;
    });
    setShowProd(clikedProduct);
  }
  // console.log(addedProds)
  useEffect(() => {
    addProductsArr();
  }, [addedProds]);


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home
            productsInfo={productsInfo}
            addProducts={handleAddedProds}
            addedProducts={addedProducts}
            showProduct={handleShowProd}
            showProductArr={showProd}
          />} />
          <Route path='/pages/ProductPage' element={<ProductPage
            productsInfo={productsInfo}
            addProducts={handleAddedProds}
            addedProducts={addedProducts}
            showProduct={handleShowProd}
            showProductArr={showProd}
          />} />
          <Route path='/pages/About' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
