import React, { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

const App = () => {
  const [mode, setMode] = useState("home");         // "home" | "login" | "register" | "cart"
  const [cartTotal, setCartTotal] = useState(0);    // total para mostrar en Navbar

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar onNavigate={setMode} cartTotal={cartTotal} />

      {mode === "home" && <Header />}

      {mode === "home" && (
        <main className="container my-5 flex-grow-1">
          <Home />
        </main>
      )}

      {mode === "login" && (
        <main className="container my-5 flex-grow-1">
          <Login onSuccess={() => setMode("home")} />
        </main>
      )}

      {mode === "register" && (
        <main className="container my-5 flex-grow-1">
          <Register onSuccess={() => setMode("home")} />
        </main>
      )}

      {mode === "cart" && (
        <main className="container my-5 flex-grow-1">
          <Cart onTotalChange={setCartTotal} />
        </main>
      )}

      <Footer />

      {/*
        {mode === "home" && (
          <main className="container my-5 flex-grow-1">
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <CardPizza
                  name="Napolitana"
                  price={5950}
                  ingredients={["mozzarella","tomates","jamón","orégano"]}
                  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                />
              </div>
              <div className="col-12 col-md-4">
                <CardPizza
                  name="Española"
                  price={6950}
                  ingredients={["mozzarella","gorgonzola","parmesano","provolone"]}
                  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                />
              </div>
              <div className="col-12 col-md-4">
                <CardPizza
                  name="Pepperoni"
                  price={6950}
                  ingredients={["mozzarella","pepperoni","orégano"]}
                  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                />
              </div>
            </div>
          </main>
        )}
      */}
    </div>
  );
};

export default App;