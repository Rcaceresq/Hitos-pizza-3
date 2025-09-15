import React from "react";

const formatCLP = (v) =>
  Number(v || 0).toLocaleString("es-CL", { style: "currency", currency: "CLP" });

const Navbar = ({ onNavigate = () => {}, cartTotal = 0 }) => {
  const go = (mode) => (e) => {
    e?.preventDefault?.();
    onNavigate(mode);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <a className="navbar-brand fw-bold" href="#" onClick={go("home")}>
        🍕 Pizzería Mamma Mía
      </a>

      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-light" onClick={go("home")}>🍕 Home</button>
        <button className="btn btn-outline-light" onClick={go("login")}>🔐 Login</button>
        <button className="btn btn-warning" onClick={go("register")}>✨ Crear cuenta</button>

        <button className="btn btn-info text-dark fw-semibold" onClick={go("cart")}>
          🛒 Total: {formatCLP(cartTotal)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;